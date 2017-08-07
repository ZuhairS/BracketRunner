import axios from 'axios';
import Keychain from 'react-native-keychain';

import {BRACKET_URL} from '../api';


  exports.getBracket = function(dispatch) {
    return axios.get(BRACKET_URL(bracket_id))
    .then((response) => {
      dispatch(setBracket(response.data.bracket));
    })
  }


export var setBracket = (bracket) => {
  return {
    type: 'SET_BRACKET',
    bracket
  }
}
