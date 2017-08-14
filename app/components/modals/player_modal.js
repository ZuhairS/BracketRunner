'use strict';
//modules
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  ReactNative,
  Modal,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
  Linking,
  Image
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

//components
import BracketFeed from '../bracket/bracket_feed';

export default class PlayerModal extends Component {
  constructor(props) {
    super(props);

    this.hasTwitterUrl = this.hasTwitterUrl.bind(this);
    this.hasTwitchUrl = this.hasTwitchUrl.bind(this);
    this.hasYoutubeUrl = this.hasYoutubeUrl.bind(this);
  }

  hasTwitterUrl() {
    if (this.props.selectedUser.twitterUrl) {
      return (
        <TouchableOpacity style={styles.linkIcon} onPress={() => Linking.openURL(this.props.selectedUser.twitterUrl)}>
          <Icon name="twitter" size={30} color={'yellow'} />
        </TouchableOpacity>
      );
    } else {
      return null;
    }
  }

  hasTwitchUrl() {
    if (this.props.selectedUser.twitchUrl) {
      return (
        <TouchableOpacity style={styles.linkIcon} onPress={() => Linking.openURL(this.props.selectedUser.twitchUrl)}>
          <Icon name="twitch" size={30} color={'yellow'} />
        </TouchableOpacity>
      );
    } else {
      return null;
    }
  }

  hasYoutubeUrl() {
    if (this.props.selectedUser.youtubeUrl) {
      return (
        <TouchableOpacity style={styles.linkIcon} onPress={() => Linking.openURL(this.props.selectedUser.youtubeUrl)}>
          <Icon name="youtube" size={30} color={'yellow'} />
        </TouchableOpacity>
      );
    } else {
      return null;
    }
  }

  render() {
    const { selectedUser } = this.props;

    return (
      <View style={styles.outerContainer}>
        <View style={styles.container}>
          <Image style={styles.sponserPicture} source={{uri: selectedUser.sponserImageUrl}}/>

          <View style={styles.content}>
            <Image style={styles.profilePicture} source={{uri: selectedUser.avatarUrl}}/>
            <Text style={styles.header}>{ selectedUser.username }</Text>
          </View>

          <View style={styles.linksContainer}>
            <View style={styles.links}>
              {this.hasTwitterUrl()}
              {this.hasTwitchUrl()}
              {this.hasYoutubeUrl()}
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: '#000',
  },
  container: {
    flex: 1,
    backgroundColor: '#333',
    marginLeft: 5,
    marginRight: 5,
  },
  content: {
    flexDirection: 'row',

  },
  header: {
    alignItems: 'center',
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'yellow',
    paddingTop: 30,
  },
  profilePicture: {
    alignSelf: 'center',
    marginTop: 15,
    height: 150,
    width: 150,
    backgroundColor: 'white',
    borderRadius: 80,
  },
  sponserPicture: {
    marginTop: 1,
    height: 100,
    width: '100%',
    backgroundColor: 'white',
  },
  followButton: {
    alignSelf: 'center',
    height: 50,
    width: 150,
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  followButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  innerContainer: {
    flex: 7,
    marginTop: 20
  },
  linksContainer: {
    alignItems: 'center'
  },
  links: {
    backgroundColor: '#333',
    borderBottomWidth: .5,
    borderColor: 'yellow',
    alignItems: 'center',
    width: 300,
    height: 80,
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 30,
    justifyContent: 'space-around',
    flexDirection: 'row'
  }
});

const mapStatetoProps = (state) => {
  return {
    selectedUser: state.users.selectedUser
  }
}

const mapDispatchToProps = dispatch => {
  return {
    requestLiveBrackets: () => dispatch(requestLiveBrackets())
  }
}

module.exports = connect(mapStatetoProps, mapDispatchToProps)(PlayerModal)
