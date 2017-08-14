import React, { Component } from 'react';
import {connect} from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback
} from 'react-native';

import {removeAlert} from '../../actions/alerts_actions';

Alert = class Alert extends Component {
  constructor(props) {
    super(props);

    this.onRemoveAlert = this.onRemoveAlert.bind(this);
  }
  onRemoveAlert() {
    var {dispatch, alert} = this.props;
    dispatch(removeAlert(alert.id));
  }
  render() {
    return (
      <TouchableWithoutFeedback onPress={this.onRemoveAlert}>
        <View style={styles.container}>
          <Text style={styles.text}>
            {this.props.alert.text}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 16,
    backgroundColor: '#f2dede',
    borderColor: '#ebccd1',
    borderTopWidth: 2
  },
  text: {
    color: "#a94442"
  }
});

module.exports = connect()(Alert);
