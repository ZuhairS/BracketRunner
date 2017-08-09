
import {createStore, compose, applyMiddleware} from 'redux';
// import {AsyncStorage} from 'react-native';
// import {persistStore, autoRehydrate} from 'redux-persist';
import reducer from '../reducers/root_reducer';

var defaultState = {
  bracket: {
    matches:[
      {
        player1:"pending",
        player2:"pending"
      },
      {
        player1:"pending",
        player2:"pending"
      }, {
        player1:"pending",
        player2:"pending"
      }, {
        player1:"pending",
        player2:"pending"
      }
    ]
  }
};
//
// exports.configureStore = (initialState=defaultState) => {
//   var store = createStore(reducer, initialState, compose(
//     autoRehydrate()
//   ));
//   persistStore(store, {storage: AsyncStorage});
//   return store;
// }

export var configureStore = (initialState=defaultState) => {
  return createStore(reducer, initialState)
}
