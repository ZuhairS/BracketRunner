import axios from 'axios';

import { GET_URL, EDIT_URL } from '../util/user_api_util';

import { addAlert } from './alerts_actions';

export const RECEIVE_USER = 'RECEIVE_USER';

exports.editUser = userProps => {
  return function(dispatch) {
    return axios
      .patch(EDIT_URL, userProps)
      .then(response => {
        var { user } = response.data;
        dispatch(receiveUser(user));
      })
      .catch(error => {
        dispatch(addAlert('Could not update profile'));
      });
  };
};

exports.editUser = ({
  picture,
  twitter,
  twitch,
  youTube,
  sponsor,
  sponsor_picture,
  about
}) => {
  return function(dispatch) {
    return axios
      .patch(EDIT_URL, {
        picture,
        twitter,
        twitch,
        youTube,
        sponsor,
        sponsor_picture,
        about
      })
      .then(response => {
        var { user_id, token } = response.data;
        dispatch(addAlert(token));
        dispatch(editUser(user_id));
      })
      .catch(error => {
        dispatch(addAlert('Could update profile'));
      });
  };
};
