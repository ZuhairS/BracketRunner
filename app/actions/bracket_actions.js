import axiosnp from 'axios';
import Keychain from 'react-native-keychain';

import {BRACKET_URL} from '../util/bracket_api_util';

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
