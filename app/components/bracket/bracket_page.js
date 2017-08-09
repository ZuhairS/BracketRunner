//modules
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { receiveBracket } from '../../actions/bracket_actions';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView
} from 'react-native';

//components
import HomePage from '../home_page';
import NavBar from '../nav_bar';
import BracketMatchesIndex from './bracket_matches_index';

export default class Bracket extends Component{
  constructor(props) {
    super(props);

    this.navigateToHome = this.navigateToHome.bind(this);
    this.getBracket = this.getBracket.bind(this);
  }

  getBracket() {
    this.props.receiveBracket();
  }

  navigateToHome() {
    this.props.navigator.pop({
      component: HomePage,
      title: 'HomePage',
      navigationBarHidden: true
    });
  }

  render() {
    return (
      <View style={bracketStyles.container}>
        <NavBar/>
        {/*link to home button*/}
        <TouchableOpacity onPress={this.navigateToHome}>
          <Text>Home</Text>
        </TouchableOpacity>
        {/*get match info button*/}
        <TouchableOpacity onPress={this.getBracket}>
          <Text>Show Bracket</Text>
        </TouchableOpacity>
        <View style={bracketStyles.body}>

        <BracketMatchesIndex/>

        </View>
      </View>
    );
  }//render
}//Bracket

const bracketStyles = StyleSheet.create({
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
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 50
  },
  showBracketButton: {
    paddingTop: 20
  }
});

const mapDispatchToProps = dispatch => {
  return {
    receiveBracket: () => dispatch(receiveBracket())
  }
}

module.exports = connect(null, mapDispatchToProps)(Bracket);
