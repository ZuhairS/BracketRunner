var defaultState = { matches:[
                   {
                     player1:"player1",
                     player2:"player2"
                   }, {
                     player1:"player3",
                     player2:"player4"
                   }, {
                     player1:"player5",
                     player2:"player6"
                   }, {
                     player1:"player7",
                     player2:"player8"
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
