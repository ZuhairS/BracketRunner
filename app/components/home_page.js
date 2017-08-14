//components
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView
} from 'react-native';

//components
import Menu from './modals/menu';
import BracketFeed from './bracket/bracket_feed';

export default class HomePage extends Component {
  constructor(props) {
    super(props);

    this.onCreateBracketPress = this.onCreateBracketPress.bind(this);
    this.handleMenuPress = this.handleMenuPress.bind(this);
  }

  onCreateBracketPress() {
    this.props.navigation.navigate('BracketForm');
  }

  handleMenuPress() {
    this.props.navigation.navigate('Menu');
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => this.handleMenuPress()}
        >
          <Text>Menu</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.createBracketButton}
          onPress={() => this.onCreateBracketPress()}
        >
          <Text style={styles.createBracketButtonText}>Create Bracket</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#333'
  },
  createBracketButton: {
    borderWidth: 1,
    borderRadius: 10,
    width: 200,
<<<<<<< HEAD
    marginTop: 100
=======
    marginTop: 100,
    borderColor: 'yellow',
    borderWidth: 2
>>>>>>> b922746306623665adf41836ac87e1fff679b502
  },
  createBracketButtonText: {
    fontSize: 20,
    alignItems: 'center',
    alignSelf: 'center',
<<<<<<< HEAD
    padding: 8
=======
    padding: 8,
    color: 'yellow'
>>>>>>> b922746306623665adf41836ac87e1fff679b502
  },
  menuButton: {
    marginTop: 60,
    marginBottom: 40
  }
});

module.exports = HomePage;
