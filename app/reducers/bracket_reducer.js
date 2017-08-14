import {
  RECEIVE_SELECTED_BRACKET,
  RECEIVE_FEATURED_BRACKET,
  RECEIVE_LIVE_BRACKETS
} from '../actions/bracket_actions';

var defaultState = {
  selectedBracket: {
    title: 'SmashCon',
    tournamentOrganizerId: '5990eab8e575bd3faffcc86d',
    entrants: {
      1: 'ZPowers',
      2: 'PhoenixD',
      3: 'Player3',
      4: 'Ali',
      5: 'PotatoeMonster',
      6: 'ooohhmyyygaawd',
      7: 'Knight1916',
      8: 'mango'
    },
    game: 'Super Smash Bros. Melee',
    live: true,
    streamUrl: 'http://google.com',
    matches: [
      {
        pairing: {
          player1: 'ZPowers',
          player2: 'PhoenixD'
        },
        result: {
          winner: 'PhoenixD',
          loser: 'ZPowers',
          player1Score: 1,
          player2Score: 2,
          status: 'finalized'
        }
      },
      {
        pairing: {
          player1: 'Ali',
          player2: 'Player3'
        },
        result: {
          winner: 'Ali',
          loser: 'Player3',
          player1Score: 1,
          player2Score: 2,
          status: 'finalized'
        }
      },
      {
        pairing: {
          player1: 'ohmygawd',
          player2: 'Potatoe'
        },
        result: {
          winner: 'ooohhmyyygaawd',
          loser: 'PotatoeMonster',
          player1Score: 2,
          player2Score: 0,
          status: 'finalized'
        }
      },
      {
        pairing: {
          player1: 'Knight1916',
          player2: 'mango'
        },
        result: {
          winner: 'Knight1916',
          loser: 'mango',
          player1Score: 0,
          player2Score: 0,
          status: 'pending'
        }
      }
    ]
  },
  featuredBracket: {},
  liveBrackets: []
};

module.exports = (state = defaultState, action) => {
  switch (action.type) {
    case RECEIVE_SELECTED_BRACKET:
      return Object.assign({}, state, { selectedBracket: action.bracket });

    case RECEIVE_FEATURED_BRACKET:
      return Object.assign({}, state, { featuredBracket: action.bracket });

    case RECEIVE_LIVE_BRACKETS:
      return Object.assign({}, state, { liveBrackets: action.brackets });

    default:
      return state;
  }
};
