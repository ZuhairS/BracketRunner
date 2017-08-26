import axios from 'axios';

import { GET_URL, EDIT_URL } from '../util/user_api_util';

import { addAlert } from './alerts_actions';

export const RECEIVE_USER = 'RECEIVE_USER';

export const requestUser = userId => dispatch => {
  return axios
    .get(GET_URL(userId))
    .then(response => {
      var { user } = response.data;
      dispatch(receiveUser(user));
    })
    .catch(error => {
      dispatch(addAlert('Could not fetch profile'));
    });
};
export const editUser = userProps => dispatch => {
  return axios
    .put(EDIT_URL(userProps._id), userProps)
    .then(response => {
      var { user } = response.data;
      dispatch(receiveUser(user));
    })
    .catch(error => {
      dispatch(addAlert('Could not update profile'));
    });
};

const receiveUser = user => {
  return {
    type: RECEIVE_USER,
    user
  };
};
