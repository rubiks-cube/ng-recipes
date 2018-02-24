import {Effect, Actions} from '@ngrx/effects';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

import * as authActions from './auth.actions';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import {fromPromise} from 'rxjs/observable/fromPromise';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {
    @Effect()
    authSignUp = this.actions$.ofType(authActions.TRY_SIGNUP)
    .map((action: authActions.TrySignup) => {
       return action.payload;
    })
    .switchMap((authData: {username: string, password: string}) => {
          return fromPromise(firebase.auth().createUserWithEmailAndPassword(authData.username, authData.password));
    })
    .switchMap(() => {
        return fromPromise(firebase.auth().currentUser.getIdToken());
   })
   .mergeMap((token: string) => {
    this.router.navigate(['/']);
    return [
        {
            type: authActions.SIGNUP
        },
        {
            type:  authActions.SET_TOKEN,
            payload: token
        }
      ];
     });

     @Effect()
    authSignIn = this.actions$.ofType(authActions.TRY_SIGNIN)
    .map((action: authActions.TrySignin) => {
       return action.payload;
    })
    .switchMap((authData: {username: string, password: string}) => {
          return fromPromise(firebase.auth().signInWithEmailAndPassword(authData.username, authData.password));
    })
    .switchMap(() => {
        return fromPromise(firebase.auth().currentUser.getIdToken());
   })
   .mergeMap((token: string) => {
       this.router.navigate(['/']);
    return [
        {
            type: authActions.SIGNIN
        },
        {
            type:  authActions.SET_TOKEN,
            payload: token
        }
      ];
     });

     @Effect({dispatch: false})
     authLogout = this.actions$
     .ofType(authActions.LOGOUT)
     .do(() => {
           this.router.navigate(['/']);
     });


    constructor(private actions$: Actions, private router: Router) {}
}
