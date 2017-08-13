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
    let { selectedBracket } = this.props;
    if (selectedBracket.live) {
      return "Live!";
    } else {
      return "";
    }
  }

  tourneyStream() {
    let { selectedBracket } = this.props;
    if (selectedBracket.streamUrl && selectedBracket.live) {
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
    let { liveBrackets, selectedBracket } = this.props;

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
    backgroundColor: 'white',
    height: 450,
    width: 400,
    padding: 20,
    backgroundColor: '#333'
  },
  header: {
    marginBottom: 40,
    fontWeight: 'bold',
    color: 'yellow',
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
  gameTextContainer: {

  },
  gameText: {
    color: 'white',
    fontSize: 13,
  },
  streamLink: {
    color: 'yellow',
    paddingTop: 10,
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
