import {combineReducers} from 'redux';

import bracketReducer from './bracketReducer';


module.exports = combineReducers({
  bracket: bracketReducer
});
