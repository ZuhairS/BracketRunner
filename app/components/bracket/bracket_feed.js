//modules
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import { selectAllLiveBrackets } from '../../reducers/selectors';

export default class BracketFeed extends Component{
  constructor(props) {
    super(props);

    this.onLearnMore = this.onLearnMore.bind(this);
  }

  onLearnMore() {
    this.props.navigation.navigate('BracketDetail');
  }

  render() {
    const { liveBrackets } = this.props;

    const allLiveBrackets = liveBrackets.map((bracket, idx) => (
      <View key={`bracket-${idx}`} bracket={ bracket }>
        <TouchableOpacity style={styles.bracketButton} onPress={() => this.onLearnMore()}>
          <Text style={styles.bracketTitle}>Bracket Title</Text>
          <View style={styles.timeContainer}>
            <Text style={styles.time}>Start Time - End Time</Text>
            <Text style={styles.live}>Live!</Text>
          </View>
        </TouchableOpacity>
      </View>
    ));

    return (
      <View style={styles.bracketContainer}>
        <Text style={styles.header}>Streaming Now</Text>
        <ScrollView>
          { allLiveBrackets }
          <TouchableOpacity style={styles.bracketButton} onPress={() => this.onLearnMore()}>
            <Text style={styles.bracketTitle}>Bracket Title</Text>
            <View style={styles.timeContainer}>
              <Text style={styles.time}>Start Time - End Time</Text>
              <Text style={styles.live}>Live!</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bracketButton} onPress={() => this.onLearnMore()}>
            <Text style={styles.bracketTitle}>Bracket Title</Text>
            <View style={styles.timeContainer}>
              <Text style={styles.time}>Start Time - End Time</Text>
              <Text style={styles.live}>Live!</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}//BracketMatchesIndex

const styles = StyleSheet.create({
  bracketContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    height: 450,
    width: 400,
    padding: 20,
    backgroundColor: '#333'
  },
  header: {
    marginBottom: 40,
    fontWeight: 'bold',
    color: 'white',
    fontSize: 28,

  },
  bracketButton: {
    padding: 10,
    margin: 5,
    borderBottomWidth: .3,
    borderColor: 'yellow',
    borderRadius: 15,
    height: 90,
    width: 350,
  },
  bracketTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  timeContainer: {

  },
  time: {
    color: 'white',
    fontSize: 12,
  },
  live: {
    color: 'yellow',
    paddingTop: 20,
    alignSelf: 'flex-end',

  }
});

const mapStatetoProps = (state) => {
  return {
    liveBrackets: selectAllLiveBrackets(state)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    requestLiveBrackets: () => dispatch(requestLiveBrackets())
  }
}

module.exports = connect(mapStatetoProps, mapDispatchToProps)(BracketFeed)
