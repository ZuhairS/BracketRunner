import { RECEIVE_USER } from '../actions/auth_actions';

var defaultState = {
  selectedUser: {}
};

module.exports = (state = defaultState, action) => {
  switch (action.type) {
    case 'RECEIVE_USER':
      return {
        selectedUser: action.user
      };

    default:
      return state;
  }
};
