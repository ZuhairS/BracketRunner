const API_URL = 'http://localhost:3000/v1';

export const BRACKET_URL = (bracket_id) => `${API_URL}/brackets/${bracket_id}`;
export const BRACKETS_URL = () => `${API_URL}/brackets`;
