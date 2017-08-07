import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import Home from './home';
import TextComponent from './text';

var Bracket = React.createClass({
  getInitialState: function() {
    return {
      text: "BracketRunner!"
    }
  },
  navigateToHome: function() {
    this.props.navigator.pop({
      component: Home,
      title: 'Home',
      navigationBarHidden: true
    });
  },
  render() {
    return (
      <View style={bracketStyles.container}>
        <TextComponent text={this.state.text}/>
        <View style={bracketStyles.body}>
          <TouchableOpacity onPress={this.navigateToHome}>
            <Text>Home</Text>
          </TouchableOpacity>

        </View>
      </View>
    );
  }
});

const bracketStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    width: 400,
    paddingTop: 50
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

module.exports = Bracket;
