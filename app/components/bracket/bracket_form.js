//modules
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';



export default class BracketForm extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <View style={styles.container}>
        <Text>
          Please enter bracket information
        </Text>
        <Text>
          Bracket name
        </Text>
        <Text>
          Number of Entrants
        </Text>
        <Text>
          more fields...
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

module.exports = BracketForm
