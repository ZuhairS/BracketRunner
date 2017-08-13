'use strict';
//modules
import React, { Component } from 'react';
import {connect} from 'react-redux';
import { signOutUser } from '../../actions/auth_actions'
import {
  ReactNative,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

const Menu = class Menu extends Component {
  constructor(props) {
    super(props);

    this.onCreateBracketPress = this.onCreateBracketPress.bind(this);
    this.onSignOutPress = this.onSignOutPress.bind(this);
  }

  onCreateBracketPress() {
    this.props.navigation.navigate('CreateBracket');
  }

  onSignOutPress() {
    this.props.signOutUser(this.props.state.auth);
  }

  onEditUserPress(){

  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <TouchableOpacity style={styles.modalButton}>
            <Text style={styles.modalButtonText}>About</Text>
            <View />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.modalButton}
            onPress={() => this.onSignOutPress()}
          >
            <Text style={styles.modalButtonText}>Log Out</Text>
            <View />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.modalButton}
            onPress={() => this.onEditUserPress()}
          >
            <Text style={styles.modalButtonText}>Edit Profile</Text>
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


var mapStateToProps = (state) => {
  return {
    state
  }
}
var mapDispatchToProps = (dispatch) => {
  return {
      signOutUser: (user) => dispatch(signOutUser(user))
  }
}


module.exports = connect(mapStateToProps, mapDispatchToProps)(Menu);
