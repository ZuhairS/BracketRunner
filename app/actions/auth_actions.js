import axios from 'axios';
import Keychain from 'react-native-keychain';

import {SIGNIN_URL, SIGNUP_URL} from '../util/auth_api';
// import * as APIUtil from '../util/auth_api_util';
import {addAlert} from './alertsActions';

export const AUTH_USER = 'AUTH_USER';
export const UNAUTH_USER = 'UNAUTH_USER';


exports.loginUser = (email, password) => {
  return function(dispatch) {
    return axios.post(SIGNIN_URL, {email, password}).then((response) => {
      var {user_id, token} = response.data;
      Keychain.setGenericPassword(user_id, token)
        .then(function() {
          dispatch(authUser(user_id));
        }).catch((error) => {
          dispatch(addAlert("Could not log in."));
        });
    }).catch((error) => {
      dispatch(addAlert("Could not log in."));
    });
  }
}

exports.signupUser = (email, password) => {
  return function(dispatch) {
    return axios.post(SIGNUP_URL, {email, password}).then((response) => {
      var {user_id, token} = response.data;
      Keychain.setGenericPassword(user_id, token)
        .then(function() {
          dispatch(authUser(user_id));
        }).catch((error) => {
          dispatch(addAlert("Could not log in."));
        });
    }).catch((error) => {
      dispatch(addAlert("Could not sign up."));
    });
  }
}

authUser = (user_id) => {
  return {
    type: AUTH_USER,
    user_id
  }
}

exports.unauthUser = {
  type: UNAUTH_USER
}
