import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  NavigatorIOS
} from 'react-native';
//imported components
import NavBar from './nav_bar';
import BracketPage from './bracket/bracket_page';

export default class HomePage extends Component {
  constructor(props) {
    super(props);

    this.navigateToBracket = this.navigateToBracket.bind(this);
  }

  navigateToBracket() {
    this.props.navigator.push({
      component: BracketPage,
      title: 'BracketPage',
      navigationBarHidden: true
    });
  }

  render() {
    return (
      <View style={HomeStyles.container}>
        <NavBar/>
        <View style={HomeStyles.body}>
          <TouchableOpacity onPress={this.navigateToBracket}>
            <Text>Go to Bracket </Text>
          </TouchableOpacity>
        </View>

      </View>
    );
  }
}

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

var mapStatetoProps = (bracket) => {
  return {
    matches: bracket.matches
  }
}

module.exports = connect(mapStatetoProps)(HomePage);
