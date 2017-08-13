import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
//imported components
// import NavBar from '../nav_bar/nav_bar';

export default class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.onEditPress= this.onEditPress.bind(this);
  }

  onEditPress() {
    this.props.navigation.navigate('ProfilePageForm');
  }

  render() {
    return (
      <View style={styles.container} >
        <TouchableOpacity
          style={styles.modalButton}
          onPress={() => this.onEditPress()}
          >
          <Text style={styles.modalButtonText}>Edit Profile</Text>
        </TouchableOpacity>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    width: 400,
    paddingTop: 25
  },
  body: {
    flex: 9,
    alignSelf: 'stretch',
    backgroundColor: 'white',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  modalButton: {
    backgroundColor: 'white',
    height: 40,
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 2,
    flexDirection: 'row'
  }
});

module.exports = ProfilePage;
