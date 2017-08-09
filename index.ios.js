//modules
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS} from 'react-native';
import { Provider } from 'react-redux';

//components
import HomePage from './app/components/home_page';
import { configureStore } from './app/store/store';
import { Tabs } from './app/components/config/router';

export default class BracketRunner extends Component {
  render() {
    return (
      <Provider store={configureStore()}>
        {/* <NavigatorIOS
          initialRoute={{
            component: HomePage,
            title: 'Home',
            navigationBarHidden: true
          }}
          style={{flex: 1}}
        /> */}
        <Tabs />
      </Provider>
    );
  }
}//BracketRunner

AppRegistry.registerComponent('BracketRunner', () => BracketRunner);
