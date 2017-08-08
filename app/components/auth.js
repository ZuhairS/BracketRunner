import React from 'react';
import {connect} from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView
} from 'react-native';

import Home from './home';

var Bracket = React.createClass({
  navigateToHome: function() {
    this.props.navigator.pop({
      component: Home,
      title: 'Home',
      navigationBarHidden: true
    });
  },
  render() {
    // const {Auth} = this.props;

    return (
      <View style={bracketStyles.container}>
      <TouchableOpacity onPress={this.navigateToHome}>
        <Text>Home</Text>
      </TouchableOpacity>
      </View>
    );
  }
});

//&#160;; (space without line break)

const bracketStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    width: 420,
    paddingTop: 25
  }
});

var mapStatetoProps = ({bracket}) => {
  return {
    matches: bracket.matches
  }
}

module.exports = connect(mapStatetoProps)(Bracket);
