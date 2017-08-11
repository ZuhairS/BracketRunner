import React, { Component } from 'react';
import {connect} from 'react-redux';
import AlertContainer from './alerts/alert_container';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  NavigatorIOS
} from 'react-native';

import Auth from './auth';

const Home = React.createClass({
  getInitialState: function() {
    return {
      text: 'BracketRunner!'
    };
  },
  navigateToAuth: function() {
    this.props.navigator.push({
      component: Auth,
      title: 'Auth',
      navigationBarHidden: true
    });
  },
  render() {
    return (
      <View style={HomeStyles.container}>
        <View style={HomeStyles.body}>
          <TouchableOpacity onPress={this.navigateToBracket}>
            <Text>Go to Bracket </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.navigateToAuth}>
            <Text>Go to Auth</Text>
          </TouchableOpacity>
        </View>


        <View>
          <AlertContainer />
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
  }
});

var mapStatetoProps = bracket => {
  return {
    matches: bracket.matches
  };
};

module.exports = connect(mapStatetoProps)(Home);
