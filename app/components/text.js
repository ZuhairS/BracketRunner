import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback
} from 'react-native';

const Main = React.createClass({
  render: function() {
    return (
      <View style={MainStyles.container}>
        <Text>{this.props.text}</Text>
      </View>
    );
  }
});

const MainStyles = StyleSheet.create({
  title: {
    color: 'black'
  }
});

module.exports = Main;
