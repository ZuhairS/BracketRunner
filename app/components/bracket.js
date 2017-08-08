//modules
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { receiveBracket } from '../actions/bracket_actions';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView
} from 'react-native';

//components
import Home from './home';
import TextComponent from './text';
import BracketMatches from './bracket_matches';

export default class Bracket extends Component{
  constructor(props) {
    super(props);
    this.state = { text: 'BracketRunner!' };

    this.navigateToHome = this.navigateToHome.bind(this);
    this.getBracket = this.getBracket.bind(this);
  }

  getBracket() {
    this.props.receiveBracket();
  }

  navigateToHome() {
    this.props.navigator.pop({
      component: Home,
      title: 'Home',
      navigationBarHidden: true
    });
  }

  render() {
    return (
      <View style={bracketStyles.container}>
        <TextComponent text={this.state.text}/>
        {/*link to home button*/}
        <TouchableOpacity onPress={this.navigateToHome}>
          <Text>Home</Text>
        </TouchableOpacity>
        {/*get match info button*/}
        <TouchableOpacity onPress={this.getBracket}>
          <Text>Show Bracket</Text>
        </TouchableOpacity>
        <View style={bracketStyles.body}>

        <BracketMatches/>

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
    width: 420,
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

const mapStatetoProps = ({bracket}) => {
  return {
    matches: bracket.matches
  }
}

const mapDispatchToProps = dispatch => {
  return {
    receiveBracket: () => dispatch(receiveBracket())
  }
}

module.exports = connect(mapStatetoProps, mapDispatchToProps)(Bracket);
