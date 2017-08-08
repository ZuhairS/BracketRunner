import {combineReducers} from 'redux';

import bracketReducer from './bracket_reducer';

module.exports = combineReducers({
  bracket: bracketReducer
});
