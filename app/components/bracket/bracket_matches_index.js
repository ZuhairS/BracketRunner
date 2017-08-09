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
      <View style={styles.bracketContainer}>
        <Text>Matches</Text>
{/********************************************************************/}
{/*Round 1*/}
        <View>
          <Text>Round 1</Text>
          <View style={styles.match}>
            {/*Match 1*/}
            <Text>{matches[0].player1} vs {matches[0].player2}</Text>
          </View>

          <View style={styles.match}>
            {/*Match 2*/}
            <Text>{matches[1].player1} vs {matches[1].player2}</Text>
          </View>

          <View style={styles.match}>
            {/*Match 3*/}
            <Text>{matches[2].player1} vs {matches[2].player2}</Text>
          </View>

          <View style={styles.match}>
            {/*Match 4*/}
            <Text>{matches[3].player1} vs {matches[3].player2}</Text>
          </View>
        </View>
{/********************************************************************/}
{/*Round 2*/}
        <View>
          <Text>Round 2</Text>
          <View style={styles.match}>
            {/*Match 5*/}
            <Text>pending vs pending</Text>
          </View>

          <View style={styles.match}>
            {/*Match 6*/}
            <Text>pending vs pending</Text>
          </View>
        </View>
{/********************************************************************/}
{/*Round 3*/}
        <Text>Round 3</Text>
        <View>
          <View style={styles.match}>
            {/*Match 7*/}
            <Text>pending vs pending</Text>
          </View>
        </View>
{/********************************************************************/}
      </View>
    );
  }
}//BracketMatchesIndex

const styles = StyleSheet.create({
  bracketContainer: {
    backgroundColor: 'white',
    height: 450,
    width: 400
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
