import { createStore, compose, applyMiddleware } from 'redux';
import { AsyncStorage } from 'react-native';
import { persistStore, autoRehydrate } from 'redux-persist';
import reducer from '../reducers/root_reducer';
import thunk from 'redux-thunk';

var defaultState = {
  // bracket: {
  //   matches: [
  //     {
  //       player1: 'pending',
  //       player2: 'pending'
  //     },
  //     {
  //       player1: 'pending',
  //       player2: 'pending'
  //     },
  //     {
  //       player1: 'pending',
  //       player2: 'pending'
  //     },
  //     {
  //       player1: 'pending',
  //       player2: 'pending'
  //     }
  //   ]
  // }
};

export var configureStore = (initialState = defaultState) => {
  const store = createStore(
    reducer,
    initialState,
    compose(applyMiddleware(thunk)),
    autoRehydrate()
  );

  persistStore(store, { storage: AsyncStorage });

  return store;
};
