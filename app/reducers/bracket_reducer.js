// import {
//   RECEIVE_USER,
//   RECEIVE_ALL_BRACKETS,
//   RECEIVE_LIVE_BRACKETS
// } from '../actions/bracket_actions';
//
// var defaultState = {
//   selectedBracket: {},
//   allBrackets: {},
//   liveBrackets: {}
// };
//
// module.exports = (state = defaultState, action) => {
//   switch (action.type) {
//     case RECEIVE_BRACKET:
//       return Object.assign({}, state, { selectedBracket: action.bracket });
//
//     case RECEIVE_ALL_BRACKETS:
//       return Object.assign({}, state, { allBrackets: action.brackets });
//
//     case RECEIVE_LIVE_BRACKETS:
//       return Object.assign({}, state, { liveBrackets: action.brackets });
//
//     default:
//       return state;
//   }
// };
