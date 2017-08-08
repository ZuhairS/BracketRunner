import {combineReducers} from 'redux';

import bracketReducer from './bracket_reducer';
import AuthReducer from ./'auth_reducer';

module.exports = combineReducers({
  bracket: bracketReducer,
  auth: AuthReducer
});
