'use strict';
//modules
import React, { Component } from 'react';
import {
  ReactNative,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

export default class Menu extends Component {
  constructor(props) {
    super(props);

    this.onCreateBracketPress = this.onCreateBracketPress.bind(this);
  }

  onCreateBracketPress() {
    this.props.navigation.navigate('CreateBracket');
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <TouchableOpacity
            style={styles.modalButton}
            onPress={() => this.onCreateBracketPress()}
          >
            <Text style={styles.modalButtonText}>Create Bracket</Text>
            <View />
          </TouchableOpacity>

          <TouchableOpacity style={styles.modalButton}>
            <Text style={styles.modalButtonText}>Settings</Text>
            <View />
          </TouchableOpacity>

          <TouchableOpacity style={styles.modalButton}>
            <Text style={styles.modalButtonText}>About</Text>
            <View />
          </TouchableOpacity>

          <TouchableOpacity style={styles.modalButtonLogOut}>
            <Text style={styles.modalButtonText}>Log Out</Text>
            <View />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1
  },
  innerContainer: {
    marginTop: 20
  },
  modalButton: {
    backgroundColor: 'white',
    height: 40,
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 2,
    flexDirection: 'row'
  },
  modalButtonLogOut: {
    backgroundColor: 'white',
    height: 40,
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 7,
    flexDirection: 'row'
  },
  modalButtonText: {
    paddingLeft: 20,
    width: 320
  }
});

module.exports = Menu;
