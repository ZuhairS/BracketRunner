var defaultState = { matches:[
                   { 
                     player1:"player1",
                     player2:"player2"
                   }, {
                     player1:"player3",
                     player2:"player4"
                   }
                    ]};

module.exports = (state = defaultState, action) => {
  switch(action.type) {

    case 'SET_BRACKET':
      return action.bracket;

    default:
      return state;
  }
}
