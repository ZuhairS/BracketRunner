import axiosnp from 'axios';
import Keychain from 'react-native-keychain';

import {BRACKET_URL} from '../api';

//constants



//asyn actions
exports.getBracket = function(dispatch) {
  return axios.get(BRACKET_URL(bracket_id))
  .then((response) => {
    dispatch(setBracket(response.data.bracket));
  })
}


//sync actions
export const setBracket = () => {
  console.log("we made it");
  return {
    type: 'SET_BRACKET'
  }
}
