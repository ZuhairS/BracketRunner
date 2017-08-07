import React, { Component } from 'react';
import {AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS} from 'react-native';
import Provider from 'react-redux';

import Home from './app/components/home';

export default class BracketRunner extends Component {
  render() {
    return (
        <NavigatorIOS
          initialRoute={{
            component: Home,
            title: 'Home',
            navigationBarHidden: true
          }}
          style={{flex: 1}}
        />
    );
  }
}//BracketRunner

AppRegistry.registerComponent('BracketRunner', () => BracketRunner);

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
