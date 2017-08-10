import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

import AuthReducer from './auth_reducer';
import AlertsReducer from './alerts_reducer';


module.exports = combineReducers({
  auth: AuthReducer,
  alerts: AlertsReducer,
  form: formReducer
});
