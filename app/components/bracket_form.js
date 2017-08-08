import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';



export default class BracketForm extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <View style={styles.container}>
        <Text>
          Welcome to React Native
        </Text>
      </View>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

module.exports = BracketForm
