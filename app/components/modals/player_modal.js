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
// import { Icon } from 'react-native-elements';

//components
import BracketFeed from '../bracket/bracket_feed';

export default class PlayerModal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Username</Text>
        <View style={styles.profilePicture}>
          {/*profile picture goes here*/}
        </View>
        <View style={styles.innerContainer}>
          <View style={styles.modalButton}>
            <Text style={styles.modalButtonText}>
              {/*sponser image */} Sponser
            </Text>
          </View>

          <View style={styles.modalButton}>
            <Text style={styles.modalButtonText} />
          </View>

          <View style={styles.links}>
            <Text style={styles.modalButtonText}>Links:</Text>

            <Text style={styles.modalButtonText}>Twitter Url</Text>

            <Text style={styles.modalButtonText}>Twitch Url</Text>

            <Text style={styles.modalButtonText}>Youtube Url</Text>
          </View>
        </View>

        <View style={styles.viewProfileContainer}>
          <TouchableOpacity style={styles.viewProfile}>
            <Text style={styles.modalButtonText}>View Profile</Text>
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
  header: {
    alignItems: 'center',
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold'
  },
  profilePicture: {
    alignSelf: 'center',
    marginTop: 10,
    marginLeft: 10,
    height: 150,
    width: 150,
    backgroundColor: 'white'
  },
  innerContainer: {
    flex: 7,
    marginTop: 20
  },
  modalButton: {
    backgroundColor: 'white',
    height: 40,
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 2,
    flexDirection: 'column'
  },
  links: {
    backgroundColor: 'white',
    alignItems: 'center',
    height: 80,
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 2,
    flexDirection: 'column'
  },
  viewProfileContainer: {
    justifyContent: 'flex-end'
  },
  viewProfile: {
    backgroundColor: 'white',
    height: 40,
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'center'
  }
});

module.exports = PlayerModal;
