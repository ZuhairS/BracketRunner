//modules
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

//components
import Menu from './menu';

export default class NavBar extends Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
      <View style={styles.containerFlex}>
        <View style={styles.container}>
          <Text style={styles.navHeader}>
            BracketRunner!
          </Text>
          {/* <TouchableOpacity style={styles.settings}>
            <Text>Settings</Text>
          </TouchableOpacity> */}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerFlex: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
    backgroundColor: '#DEDFE5',
    width: 400,
    height: 50
  },
  navHeader: {
    fontWeight: 'bold'
  },
  settings: {
    position: 'absolute',
    right: -100,
  }
});

module.exports = NavBar;
