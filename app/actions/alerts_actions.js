export const ADD_ALERT = 'ADD_ALERT';
export const REMOVE_ALERT = 'REMOVE_ALERT';

exports.addAlert = (text) => {
  return {
    type: 'ADD_ALERT',
    text
  }
}

exports.removeAlert = (id) => {
  return {
    type: 'REMOVE_ALERT',
    id
  }
}
