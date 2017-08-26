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

import { requestLiveBrackets } from '../../actions/bracket_actions';

export default class BracketFeed extends Component{
  constructor(props) {
    super(props);

    this.onLearnMore = this.onLearnMore.bind(this);
    this.isLive = this.isLive.bind(this);
    this.tourneyStream = this.tourneyStream.bind(this);
  }

  componentWillReceiveProps(){
    this.props.requestLiveBrackets();
  }

  componentWillMount() {
    this.props.requestLiveBrackets();
  }

  onLearnMore(bracket) {
    this.props.navigation.navigate('BracketDetail', { bracket });
  }

  onCreateBracketPress() {
    this.props.navigation.navigate('BracketForm');
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
        <Text style={styles.streamLink} onPress={() => Linking.openURL(this.props.selectedBracket.streamUrl)}>
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

    const allLiveBrackets = liveBrackets.map((bracket, idx) => {
      return (
        <View key={`bracket-${idx}`} bracket={ bracket }>
          <TouchableOpacity style={styles.bracketButton} onPress={() => this.onLearnMore(bracket)}>
            <Text style={styles.bracketTitle}>{bracket.title}</Text>
            <View style={styles.timeContainer}>
              <Text style={styles.gameText}>{bracket.game}</Text>
              {this.tourneyStream()}
              <Text style={styles.live}>{this.isLive()}</Text>
            </View>
          </TouchableOpacity>
        </View>
      )

    });

    return (
      <View style={styles.bracketContainer}>
        <TouchableOpacity
          style={styles.createBracketButton}
          onPress={() => this.onCreateBracketPress()}
        >
          <Text style={styles.createBracketButtonText}>Create Bracket</Text>
        </TouchableOpacity>
        <Text style={styles.header}>Streaming Now</Text>
        <ScrollView>
          { allLiveBrackets }
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
  createBracketButton: {
    borderWidth: 2,
    borderRadius: 10,
    width: 200,
    marginTop: 10,
    marginBottom: 30,
    borderColor: 'yellow'
  },
  createBracketButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: 'center',
    alignSelf: 'center',
    padding: 8,
    color: 'yellow'
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
    liveBrackets: state.bracket.liveBrackets,
    selectedBracket: state.bracket.selectedBracket
  }
}

const mapDispatchToProps = dispatch => {
  return {
    requestLiveBrackets: () => dispatch(requestLiveBrackets())
  }
}

module.exports = connect(mapStatetoProps, mapDispatchToProps)(BracketFeed)
