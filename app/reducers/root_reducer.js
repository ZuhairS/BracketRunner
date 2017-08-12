import { combineReducers } from 'redux';

import AuthReducer from './auth_reducer';
import AlertsReducer from './alerts_reducer';
import bracketReducer from './bracket_reducer';
import UserReducer from './user_reducer';
import { reducer as formReducer } from 'redux-form';

module.exports = combineReducers({
  auth: AuthReducer,
  alerts: AlertsReducer,
  bracket: bracketReducer,
  form: formReducer,
  users: UserReducer
});
