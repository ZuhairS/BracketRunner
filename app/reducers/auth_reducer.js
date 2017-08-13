import { AUTH_USER, UNAUTH_USER } from '../actions/auth_actions';

var defaultState = {
  userId: undefined
};

module.exports = (state = defaultState, action) => {
  switch (action.type) {
    case AUTH_USER:
      return {
        userId: action.userId
      };

    case UNAUTH_USER:
      return {
        userId: undefined
      };

    default:
      return state;
  }
};
