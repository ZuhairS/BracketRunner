//modules
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View } from 'react-native';
import { Provider } from 'react-redux';

//components
import HomePage from './app/components/home_page';
import { configureStore } from './app/store/store';
import { Root } from './app/components/config/router';

export default class BracketRunner extends Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <Root />
      </Provider>
    );
  }
}//BracketRunner

AppRegistry.registerComponent('BracketRunner', () => BracketRunner);
