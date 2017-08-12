import axios from 'axios';
import { BRACKET_URL, BRACKETS_URL } from '../util/bracket_api_util';

//constants
export const RECEIVE_BRACKET = 'RECEIVE_BRACKET';
export const RECEIVE_ALL_BRACKETS = 'RECEIVE_ALL_BRACKETS';

//async actions
export const requestBracket = bracketId => dispatch =>
  axios
    .get(BRACKET_URL(bracketId))
    .then(response => dispatch(receiveBracket(response.data.bracket)));

export const requestBrackets = () => dispatch =>
  axios
    .get(BRACKETS_URL())
    .then(response => dispatch(receiveAllBrackets(response.data.brackets)));

//sync actions
export const receiveBracket = bracket => {
  return {
    type: RECEIVE_BRACKET,
    bracket
  };
};

export const receiveAllBrackets = brackets => {
  return {
    type: RECEIVE_ALL_BRACKETS,
    brackets
  };
};
