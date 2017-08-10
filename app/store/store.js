import {createStore, compose, applyMiddleware} from 'redux';
 // import {AsyncStorage} from 'react-native';
 // import {persistStore, autoRehydrate} from 'redux-persist';
 import reducer from '../reducers/root_reducer';
 import thunk from 'redux-thunk';
 var defaultState = {

 };

 export var configureStore = (initialState=defaultState) => {
   return createStore(reducer, initialState, compose(
     applyMiddleware(thunk)))
 }
