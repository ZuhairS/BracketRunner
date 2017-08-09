import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS} from 'react-native';
import { Provider } from 'react-redux';

import HomePage from './app/components/home_page';
import { configureStore } from './app/store/store';

export default class BracketRunner extends Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <NavigatorIOS
          initialRoute={{
            component: HomePage,
            title: 'Home',
            navigationBarHidden: true
          }}
          style={{flex: 1}}
        />
      </Provider>
    );
  }
}//BracketRunner

AppRegistry.registerComponent('BracketRunner', () => BracketRunner);
