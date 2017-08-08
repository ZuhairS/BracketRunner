import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

export default class NavBar extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={HomePageStyles.containerFlex}>
        <View style={HomePageStyles.container}>
          <Text>
            BracketRunner!
          </Text>
          <TouchableOpacity style={HomePageStyles.dropDownMenu}>
            <Text>Menu</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const HomePageStyles = StyleSheet.create({
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
    borderWidth: 1,
    padding: 2
  }
});

module.exports = NavBar;
