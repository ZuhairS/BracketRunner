import { AUTH_USER, AUTH_USER_ID, UNAUTH_USER } from '../actions/auth_actions';

var defaultState = {
  userId: undefined,
  user: {}
};

module.exports = (state = defaultState, action) => {

  switch (action.type) {
    case AUTH_USER:
      return {
        user: action.user,
        userId: action.user._id
      };

    case UNAUTH_USER:
      return {
        userId: undefined,
        user: {}
      };

    default:
      return state;
  }
};
