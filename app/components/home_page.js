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
// import { Icon } from 'react-native-elements';

//components
import Menu from './modals/menu';
import BracketFeed from './bracket/bracket_feed';

export default class HomePage extends Component {
  constructor(props) {
    super(props);

    this.handleMenuPress = this.handleMenuPress.bind(this);
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
        <Text style={styles.searchBar}>Search Bar Goes Here</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  menuButton: {
    position: 'absolute',
    top: 10,
    right: 30
  },
  searchBar: {
    marginTop: 60,
    marginBottom: 40
  }
});

module.exports = HomePage;
