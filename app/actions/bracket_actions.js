import axiosnp from 'axios';
import { BRACKET_URL } from '../util/bracket_api_util';

//constants
export const RECEIVE_BRACKET = 'RECEIVE_BRACKET';
export const RECEIVE_ALL_BRACKETS = 'RECEIVE_ALL_BRACKETS';

//sync actions
export const receiveBracket = (bracket) => {
  return {
    type: RECEIVE_BRACKET,
    bracket
  };
};

export const receiveAllBracket = () => {
  return {
    type: RECEIVE_All_BRACKETS
  };
};

//async actions
export const fetchBracket = () => dispatch => (
  axios.get(BRACKET_URL(bracket_id)).then(response => (
    dispatch(fetchBracket(response.data.bracket))
  ))
);

export const fetchBrackets = () => dispatch => (
  axios.get(BRACKETS_URL()).then(response => (
    dispatch(receiveBrackets(response.data.brackets))
  ))
);
