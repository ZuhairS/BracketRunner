//modules
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

export default class BracketMatchesIndex extends Component{
  constructor(props) {
    super(props);

  }

  render() {
    const {matches} = this.props;

    return (
      <View style={bracketStyles.bracketContainer}>
        <Text>Matches</Text>
{/********************************************************************/}
{/*Round 1*/}
        <View>
          <Text>Round 1</Text>
          <View style={bracketStyles.match}>
            {/*Match 1*/}
            <Text>{matches[0].player1}</Text>
            <Text>{matches[0].player2}</Text>
          </View>

          <View style={bracketStyles.match}>
            {/*Match 2*/}
            <Text>{matches[1].player1}</Text>
            <Text>{matches[1].player2}</Text>
          </View>

          <View style={bracketStyles.match}>
            {/*Match 3*/}
            <Text>{matches[2].player1}</Text>
            <Text>{matches[2].player2}</Text>
          </View>

          <View style={bracketStyles.match}>
            {/*Match 4*/}
            <Text>{matches[3].player1}</Text>
            <Text>{matches[3].player2}</Text>
          </View>
        </View>
{/********************************************************************/}
{/*Round 2*/}
        <View>
          <Text>Round 2</Text>
          <View style={bracketStyles.match}>
            {/*Match 5*/}
            <Text>pending</Text>
            <Text>pending</Text>
          </View>

          <View style={bracketStyles.match}>
            {/*Match 6*/}
            <Text>pending</Text>
            <Text>pending</Text>
          </View>
        </View>
{/********************************************************************/}
{/*Round 3*/}
        <Text>Round 3</Text>
        <View>
          <View style={bracketStyles.match}>
            {/*Match 7*/}
            <Text>pending</Text>
            <Text>pending</Text>
          </View>
        </View>
{/********************************************************************/}
      </View>
    );
  }
}//BracketMatchesIndex

const bracketStyles = StyleSheet.create({
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

const mapStatetoProps = ({bracket}) => {
  return {
    matches: bracket.matches
  }
}

module.exports = connect(mapStatetoProps)(BracketMatchesIndex);
