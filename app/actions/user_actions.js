import axios from 'axios';

import { GET_URL, EDIT_URL } from '../util/auth_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';
export const UPDATE_USER = 'UPDATE_USER';

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
