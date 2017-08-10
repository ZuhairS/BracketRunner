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
import BracketFeed from '../bracket/bracket_feed';

export default class SettingsModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalVisible: false,
      transparent: true
    }

    this._setModalVisible = this._setModalVisible.bind(this);
    this._toggleTransparent = this._toggleTransparent.bind(this);
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
          animationType='none'
          transparent={this.state.transparent}
          visible={this.state.modalVisible}
          onRequestClose={() => {this._setModalVisible(false)}}
          >
          <View style={[styles.container, modalBackgroundStyle]}>
            <View style={[styles.innerContainer, innerContainerTransparentStyle]}>

              <TouchableOpacity style={styles.modalButton}>
                <Text style={styles.modalButtonText}>
                  Create Bracket
                </Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.modalButton}>
                <Text style={styles.modalButtonText}>
                  Settings
                </Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.modalButton}>
                <Text style={styles.modalButtonText}>
                  About
                </Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.modalButton}>
                <Text style={styles.modalButtonText}>
                  Log Out
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={this._setModalVisible.bind(this, false)}
                style={styles.modalButton}>
                <Text style={styles.modalButtonText}>
                  Close
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        <TouchableOpacity onPress={this._setModalVisible.bind(this, true)}>
          <Text>Settings</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  innerContainer: {
    borderRadius: 4,
    width: 200,
    alignItems: 'center',
  },
  modalButton: {
    marginTop: 10,
    width: 180,
    height: 40,
    // borderBottomWidth: .3
  },
  modalButtonText: {
    textAlign: 'center',
  }
});

module.exports = SettingsModal;
