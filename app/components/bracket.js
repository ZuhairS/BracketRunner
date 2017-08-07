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
    const {matches} = this.props;

    return (
      <View style={bracketStyles.container}>
        <TextComponent text={this.state.text}/>
        {/*link to home button*/}
        <TouchableOpacity onPress={this.navigateToHome}>
          <Text>Home</Text>
        </TouchableOpacity>
        <View style={bracketStyles.body}>

          <View style={bracketStyles.bracketContainer}>
            <Text>Matches</Text>
{/********************************************************************/}
    {/*Round 1*/}
            <View>
              <Text>Round 1</Text>
              <View style={bracketStyles.match}>
                {/*Match 1*/}
                <Text>matches[0].player1</Text>
                <Text>matches[0].player2</Text>
              </View>

              <View style={bracketStyles.match}>
                {/*Match 2*/}
                <Text>matches[1].player1</Text>
                <Text>matches[1].player2</Text>
              </View>

              <View style={bracketStyles.match}>
                {/*Match 3*/}
                <Text>matches[2].player1</Text>
                <Text>matches[2].player2</Text>
              </View>

              <View style={bracketStyles.match}>
                {/*Match 4*/}
                <Text>matches[3].player1</Text>
                <Text>matches[3].player2</Text>
              </View>
            </View>
{/********************************************************************/}
    {/*Round 2*/}
            <View>
              <Text>Round 2</Text>
              <View style={bracketStyles.match}>
                {/*Match 5*/}
                <Text>matches[4].player1</Text>
                <Text>matches[4].player2</Text>
              </View>

              <View style={bracketStyles.match}>
                {/*Match 6*/}
                <Text>matches[5].player1</Text>
                <Text>matches[5].player2</Text>
              </View>
            </View>
{/********************************************************************/}
    {/*Round 3*/}
            <Text>Round 3</Text>
            <View>
              <View style={bracketStyles.match}>
                {/*Match 7*/}
                <Text>matches[6].player1</Text>
                <Text>matches[6].player2</Text>
              </View>
            </View>
{/********************************************************************/}
          </View>

        </View>
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
  bracketContainer: {
    backgroundColor: 'white',
    height: 550,
    width: 420
  },
  match: {
    padding: 10,
    margin: 5,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'lightgrey'
  }
});

module.exports = Bracket;
