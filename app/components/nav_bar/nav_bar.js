//modules
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

//components
import { DropDownMenu } from './drop_down_menu';

export default class NavBar extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.containerFlex}>
        <View style={styles.container}>
          <Text>
            BracketRunner!
          </Text>
          <TouchableOpacity style={styles.dropDownMenu}>
            <DropDownMenu />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerFlex: {
    flex: .7,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
    backgroundColor: '#DEDFE5',
    width: 400
  },
  container: {

  },
  dropDownMenu: {
    position: 'absolute',
    right: -100,
  }
});

module.exports = NavBar;
