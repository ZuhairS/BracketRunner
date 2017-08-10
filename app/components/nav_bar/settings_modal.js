'use strict';
//modules
import React, { Component } from 'react';
import {
  ReactNative,
  Modal,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { Icon } from 'react-native-elements';

//components
import BracketFeed from '../bracket/bracket_feed';

export default class SettingsModal extends Component {
  constructor(props) {
    super(props);

  }

  render() {

    return (
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <TouchableOpacity style={styles.modalButton}>
            <Text style={styles.modalButtonText}>
              Create Bracket
            </Text>
            <View>
              <Icon name="chevron-right" size={30} color='lightgrey' />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.modalButton}>
            <Text style={styles.modalButtonText}>
              Settings
            </Text>
            <View>
              <Icon name="chevron-right" size={30} color='lightgrey' />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.modalButton}>
            <Text style={styles.modalButtonText}>
              About
            </Text>
            <View>
              <Icon name="chevron-right" size={30} color='lightgrey' />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.modalButtonLogOut}>
            <Text style={styles.modalButtonText}>
              Log Out
            </Text>
            <View>
              <Icon name="chevron-right" size={30} color='lightgrey' />
            </View>
          </TouchableOpacity>

        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    marginTop: 20,
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
    width: 320,
  }
});

module.exports = SettingsModal;
