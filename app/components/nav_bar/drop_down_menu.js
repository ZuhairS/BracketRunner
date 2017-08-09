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
  View,
  NavigatorIOS
} from 'react-native';

//components
import BracketPage from '../bracket/bracket_page';

export class DropDownMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalVisible: false,
      transparent: true
    }

    this._setModalVisible = this._setModalVisible.bind(this);
    this._toggleTransparent = this._toggleTransparent.bind(this);
    this.navigateToBracket = this.navigateToBracket.bind(this);
  }

  navigateToBracket() {
    this.props.navigator.push({
      component: BracketPage,
      title: 'BracketPage',
      navigationBarHidden: true
    });
  }

  _setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  _toggleTransparent() {
    this.setState({transparent: !this.state.transparent});
  }

  render() {
    const modalBackgroundStyle = {
      backgroundColor: this.state.transparent
      ? 'rgba(0, 0, 0, 0.5)'
      : '#f5fcff',
    };
    const innerContainerTransparentStyle = this.state.transparent
      ? {backgroundColor: '#fff', padding: 20}
      : null;
    const activeTouchableOpacityStyle = {
      backgroundColor: '#ddd'
    };

    return (
      <View>
        <Modal
          animationType='fade'
          transparent={this.state.transparent}
          visible={this.state.modalVisible}
          onRequestClose={() => {this._setModalVisible(false)}}
          >
          <View style={[styles.container, modalBackgroundStyle]}>
            <View style={[styles.innerContainer, innerContainerTransparentStyle]}>
              <TouchableOpacity onPress={this.navigateToBracket}>
                <Text>Click for Bracket</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={this._setModalVisible.bind(this, false)}
                style={styles.modalButton}>
                <Text>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        <TouchableOpacity onPress={this._setModalVisible.bind(this, true)}>
          <Text>Menu</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  innerContainer: {
    borderRadius: 10,
    alignItems: 'center',
  },
  modalButton: {
    marginTop: 10,
  }
});
