import axiosnp from 'axios';
import Keychain from 'react-native-keychain';

import {BRACKET_URL} from '../api';

//constants
export const RECEIVE_BRACKET = 'RECEIVE_BRACKET';


//sync actions
export const receiveBracket = () => {
  return {
    type: RECEIVE_BRACKET
  }
}

//asyn actions
exports.fetchBracket = function(dispatch) {
  return axios.get(BRACKET_URL(bracket_id))
  .then((response) => {
    dispatch(fetchBracket(response.data.bracket));
  })
}
