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
//imported components
import SettingsModal from './nav_bar/settings_modal';
import BracketFeed from './bracket/bracket_feed';

export default class HomePage extends Component {
  constructor(props) {
    super(props);

    this.handleSettingsPress = this.handleSettingsPress.bind(this);
  }

  handleSettingsPress() {
    this.props.navigation.navigate('SettingsModal');
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <SettingsModal/>
          <View style={styles.body}>

          </View>

        </View>
      </ScrollView>
    );
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
});

module.exports = HomePage;
