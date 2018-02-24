import * as authActions from './auth.actions';

export interface State {
    token: string;
    authenticated: boolean;
}

 const intialState: State = {
    token: null,
    authenticated: false
};

export function authReducer (state= intialState, action: authActions.authActions) {
   switch (action.type) {
       case authActions.SIGNUP:
       return {
        ...state,
        authenticated: true
       };
       case authActions.SIGNIN:
       return {
        ...state,
        authenticated: true
       };
       case authActions.SET_TOKEN:
       return {
          ...state,
          token: action.payload
       };
       case authActions.LOGOUT:
       return {
        ...state,
        token: null,
        authenticated: false
       };
       default:
       return state;
   }
}
