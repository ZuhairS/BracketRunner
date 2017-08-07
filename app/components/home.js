import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  NavigatorIOS
} from 'react-native';

import TextComponent from './text';
import Bracket from './bracket';

const Main = React.createClass({
  getInitialState: function() {
    return {
      text: "BracketRunner!"
    }
  },
  navigateToBracket: function() {
    this.props.navigator.push({
      component: Bracket,
      title: 'Bracket',
      navigationBarHidden: true
    });
  },
  render() {
    return (
      <View style={HomeStyles.container}>
        <TextComponent text={this.state.text}/>
        <View style={HomeStyles.body}>
          <TouchableOpacity onPress={this.navigateToBracket}>
            <Text>Go to Bracket</Text>
          </TouchableOpacity>
        </View>

      </View>
    );
  }
});

const HomeStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    width: 400,
    paddingTop: 25
  },
  body: {
    flex: 9,
    alignSelf: 'stretch',
    backgroundColor: '#eee',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingTop: 50
  },
});

module.exports = Main;
