'use strict';
//modules
import React, { Component } from 'react';
import { connect } from 'react-redux';
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
import Icon from 'react-native-vector-icons/FontAwesome';

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

        <TouchableOpacity>
          <View style={styles.followButton}>
          </View>
        </TouchableOpacity>
        <View style={styles.content}>
          <View style={styles.profilePicture}>
            {/*profile picture goes here*/}
          </View>
          <View style={styles.innerContainer}>
            <View style={styles.modalButton}>
              <Text style={styles.modalButtonText}>
                {/*sponser image */} Sponser
              </Text>
              <Text></Text>
            </View>
            <View style={styles.links}>

              <TouchableOpacity style={styles.modalButtonText} >
                <Icon name="twitter" size={30} color={'yellow'} />
              </TouchableOpacity>

              <TouchableOpacity style={styles.modalButtonText} >
                <Icon name="twitch" size={30} color={'yellow'} />
              </TouchableOpacity>

              <TouchableOpacity style={styles.modalButtonText} >
                <Icon name="youtube" size={30} color={'yellow'} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
  },
  header: {
    alignItems: 'center',
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'yellow',
  },
  followButton: {
    alignSelf: 'flex-end',
    marginRight: 10,
    marginLeft: 10,
    height: 50,
    width: 50,
    backgroundColor: 'white'
  },
  profilePicture: {
    alignSelf: 'flex-start',
    marginTop: 10,
    marginLeft: 10,
    height: 120,
    width: 120,
    backgroundColor: 'white'
  },
  innerContainer: {
    flex: 7,
    marginTop: 20
  },
  modalButton: {
    backgroundColor: '#333',
    height: 40,
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 2,
    flexDirection: 'column',
    borderBottomWidth: .4,
    borderColor: 'yellow',


  },
  modalButtonText: {
    color: 'white',
    fontWeight: 'bold',

  },
  links: {
    backgroundColor: '#333',
    borderBottomWidth: .5,
    borderColor: 'yellow',
    alignItems: 'flex-start',
    height: 80,
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 2,
    flexDirection: 'column'
  }
});

const mapStatetoProps = (state) => {
  return {

  }
}

const mapDispatchToProps = dispatch => {
  return {
    requestLiveBrackets: () => dispatch(requestLiveBrackets())
  }
}

module.exports = connect(mapStatetoProps, mapDispatchToProps)(PlayerModal)
