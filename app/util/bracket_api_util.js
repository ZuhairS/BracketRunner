// const API_URL = 'https://bracket-runner.herokuapp.com/api/v1';
const API_URL = 'http://localhost:3000/api/v1';

export const BRACKET_URL = bracketId => `${API_URL}/brackets/${bracketId}`;

export const FEATURED_BRACKET_URL = `${API_URL}/featured_bracket`;

export const BRACKETS_URL = `${API_URL}/brackets`;
