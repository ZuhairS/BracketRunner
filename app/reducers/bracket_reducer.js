import {
  RECEIVE_SELECTED_BRACKET,
  RECEIVE_FEATURED_BRACKET,
  RECEIVE_LIVE_BRACKETS
} from '../actions/bracket_actions';

var defaultState = {
  selectedBracket: {},
  featuredBracket: {},
  liveBrackets: {}
};

module.exports = (state = defaultState, action) => {
  switch (action.type) {
    case RECEIVE_SELECTED_BRACKET:
      return Object.assign({}, state, { selectedBracket: action.bracket });

    case RECEIVE_FEATURED_BRACKET:
      return Object.assign({}, state, { featuredBracket: action.bracket });

    case RECEIVE_LIVE_BRACKETS:
      return Object.assign({}, state, { liveBrackets: action.brackets });

    default:
      return state;
  }
};
