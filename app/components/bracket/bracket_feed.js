//modules
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Linking
} from 'react-native';

import { selectAllLiveBrackets } from '../../reducers/selectors';

export default class BracketFeed extends Component{
  constructor(props) {
    super(props);

    this.onLearnMore = this.onLearnMore.bind(this);
    this.isLive = this.isLive.bind(this);
  }

  onLearnMore() {
    this.props.navigation.navigate('BracketDetail');
  }

  isLive(){
    if (this.props.selectedBracket.live) {
      return "Live!";
    } else {
      return "";
    }
  }

  tourneyStream() {
    if (this.props.selectedBracket.streamUrl && this.props.selectedBracket.live) {
      return (
        <Text style={styles.streamLink} onPress={() => Linking.openURL(selectedBracket.streamUrl)}>
          Watch Stream
        </Text>
      );
    } else {
      return (
        <Text style={styles.streamLink}></Text>
      );
    }
  }

  render() {
    const { liveBrackets, selectedBracket } = this.props;

    const allLiveBrackets = liveBrackets.map((bracket, idx) => (
      <View key={`bracket-${idx}`} bracket={ bracket }>
        <TouchableOpacity style={styles.bracketButton} onPress={() => this.onLearnMore()}>
          <Text style={styles.bracketTitle}>{selectedBracket.title}</Text>
          <View style={styles.timeContainer}>
            <Text style={styles.time}>Game</Text>
            <Text style={styles.streamLink} onPress={() => Linking.openURL(selectedBracket.streamUrl)}>
              Watch Stream
            </Text>
            <Text style={styles.live}>{this.isLive()}</Text>
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
            <Text style={styles.bracketTitle}>{selectedBracket.title}</Text>
            <View style={styles.gameTextContainer}>
              <Text style={styles.gameText}>{selectedBracket.game}</Text>
              {this.tourneyStream()}
              <Text style={styles.live}>{this.isLive()}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bracketButton} onPress={() => this.onLearnMore()}>
            <Text style={styles.bracketTitle}>Bracket Title</Text>
            <View style={styles.gameTextContainer}>
              <Text style={styles.gameText}>Game</Text>
              <Text style={styles.streamLink} onPress={() => Linking.openURL(selectedBracket.streamUrl)}>
                Watch Stream
              </Text>
              <Text style={styles.live}>{this.isLive()}</Text>
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
    height: 450,
    width: '100%',
    padding: 20,
    backgroundColor: '#333',
    borderLeftWidth: 5,
    borderRightWidth: 5,
    borderColor: '#000',
  },
  header: {
    marginBottom: 40,
    fontWeight: 'bold',
    color: 'yellow',
    fontSize: 28,

  },
  bracketButton: {
    marginBottom: 15,
    borderBottomWidth: .3,
    borderColor: 'yellow',
    borderRadius: 15,
    height: 90,
    width: 330,
  },
  bracketTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  gameTextContainer: {

  },
  gameText: {
    color: 'white',
    fontSize: 13,
  },
  streamLink: {
    color: 'yellow',
    paddingTop: 10,
    width: 100,

  },
  live: {
    color: 'yellow',
    paddingTop: 0,
    alignSelf: 'flex-end',
  }
});

const mapStatetoProps = (state) => {
  return {
    liveBrackets: selectAllLiveBrackets(state),
    selectedBracket: state.bracket.selectedBracket,
    state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    requestLiveBrackets: () => dispatch(requestLiveBrackets())
  }
}

module.exports = connect(mapStatetoProps, mapDispatchToProps)(BracketFeed)
