const API_URL = 'https://bracket-runner.herokuapp.com/api/v1';
// const API_URL = 'http://localhost:3000/api/v1';

exports.GET_URL = userId => `${API_URL}/users/${userId}`;
exports.EDIT_URL = userId => `${API_URL}/users/${userId}`;
