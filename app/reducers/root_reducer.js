import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

import bracketReducer from './bracket_reducer';
import AuthReducer from './auth_reducer';
import AlertsReducer from './alerts_reducer';


module.exports = combineReducers({
  bracket: bracketReducer,
  auth: AuthReducer,
  alerts: AlertsReducer,
  form: formReducer
});
