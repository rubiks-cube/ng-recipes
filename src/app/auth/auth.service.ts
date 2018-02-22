import * as firebase from 'firebase';
import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

@Injectable()
export class AuthService {
token: string;
constructor(private router: Router){}

    signupUser(email: string, password: string) {
           firebase.auth().createUserWithEmailAndPassword(email, password)
           .catch(err => console.log(err));
    }

    singinUser(email: string, password: string) {
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(res => {
            this.router.navigate(['/']);
            firebase.auth().currentUser.getIdToken()
        .then(token => this.token = token);
    })
        .catch(err => console.log(err));
    }


    getToken() {
         firebase.auth().currentUser.getIdToken()
         .then(token => this.token = token);
         return this.token;
    }
    logout() {
      firebase.auth().signOut();
      this.router.navigate(['/signin']);
      this.token = null;
    }
    isAuthenticated() {
        return this.token !== ( null || undefined);
    }
}
