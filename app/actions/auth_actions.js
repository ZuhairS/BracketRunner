import axios from 'axios';

import {SIGNIN_URL, SIGNUP_URL, SIGNOUT_URL} from '../util/auth_api_util';
// import * as APIUtil from '../util/auth_api_util';
// if we get this to work lets refactor it will this better style
import {addAlert} from './alerts_actions';

export const AUTH_USER = 'AUTH_USER';
export const UNAUTH_USER = 'UNAUTH_USER';


exports.logInUser = ({email, username, password}) => {
  return function(dispatch) {
    return axios.post(SIGNIN_URL, {email, username, password}).then((response) => {
      var {user_id, token} = response.data;
      dispatch(addAlert(token));
      dispatch(authUser(user_id));
    }).catch((error) => {
      dispatch(addAlert("Could not sign in"));
    });
  }
}


exports.signUpUser = ({email, username, password}) => {
  return function(dispatch) {
    return axios.post(SIGNUP_URL, {email, username, password}).then((response) => {
      var {user_id, token} = response.data;
      dispatch(addAlert(token));
      dispatch(authUser(user_id));
    }).catch((error) => {
      dispatch(addAlert("Could not sign up"));
    });
  }
}


exports.signOutUser = ({user_id}) => {
  console.log("dispatch action");
  console.log({user_id});
  return function(dispatch) {
    return axios.delete(SIGNOUT_URL, {user_id}).then((response) => {
      var {user_id} = response.data;
      dispatch(unauthUser());
    }).catch((error) => {
      dispatch(addAlert("Could not sign out"));
    });
  }
}


authUser = (user_id) => {
  return {
    type: AUTH_USER,
    user_id
  }
}

unauthUser = () => {
  return {
    type: UNAUTH_USER
  }
}

// exports.unauthUser = {
//   type: UNAUTH_USER
// }
