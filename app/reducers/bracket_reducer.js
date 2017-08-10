var defaultState = {
  matches: [
    {
      player1: 'nick',
      player2: 'zuhair'
    },
    {
      player1: 'zach',
      player2: 'ali'
    },
    {
      player1: 'younis',
      player2: 'chris'
    },
    {
      player1: 'josh',
      player2: 'andrew'
    }
  ]
};

module.exports = (state = defaultState, action) => {
  switch (action.type) {
    case 'RECEIVE_BRACKET':
      return defaultState;
    // return Object.assign({}, state, {bracket: action.bracket});

    default:
      return state;
  }
};
