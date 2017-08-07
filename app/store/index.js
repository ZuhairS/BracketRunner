
import {createStore, compose, applyMiddleware} from 'redux';
// import {AsyncStorage} from 'react-native';
// import {persistStore, autoRehydrate} from 'redux-persist';
import reducer from '../reducers';

// var defaultState = {};
//
// exports.configureStore = (initialState=defaultState) => {
//   var store = createStore(reducer, initialState, compose(
//     autoRehydrate()
//   ));
//   persistStore(store, {storage: AsyncStorage});
//   return store;
// }

export var configureStore = (initialState) => {
  return createStore(reducer, initialState)
}
