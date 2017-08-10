//modules
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

export default class BracketFeed extends Component{
  constructor(props) {
    super(props);

    this.onLearnMore = this.onLearnMore.bind(this);
  }

  onLearnMore() {
    this.props.navigation.navigate('BracketDetail');
  }

  render() {
    const { bracket } = this.props;
    return (
      <View style={styles.bracketContainer}>
        <TouchableOpacity style={styles.bracketButton} onPress={() => this.onLearnMore()}>
          <Text>Bracket 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bracketButton} onPress={() => this.onLearnMore()}>
          <Text>Bracket 2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bracketButton} onPress={() => this.onLearnMore()}>
          <Text>Bracket 3</Text>
        </TouchableOpacity>
      </View>
    );
  }
}//BracketMatchesIndex

const styles = StyleSheet.create({
  bracketContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    height: 450,
    width: 400,
    padding: 20
  },
  bracketButton: {
    padding: 10,
    margin: 5,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'lightgrey',
    borderRadius: 15,
    width: 300,
    alignItems: 'center'
  }
});

module.exports = BracketFeed
