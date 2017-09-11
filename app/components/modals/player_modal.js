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
          <Icon name="twitter" size={35} color={'yellow'} />
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
          <Icon name="twitch" size={35} color={'yellow'} />
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
          <Icon name="youtube" size={35} color={'yellow'} />
        </TouchableOpacity>
      );
    } else {
      return null;
    }
  }

  render() {
    const { selectedUser } = this.props;

    return (
      <Image source={ {uri: 'https://www.walldevil.com/wallpapers/a39/shoutbox-twitter-background-gamers-style-images-twisted.jpg'} } style={styles.container}>
        <View style={styles.container}>

          <Image style={styles.sponserPicture} source={{uri: selectedUser.sponserImageUrl}}/>

          <View style={styles.outerContentContainer}>
            <View style={styles.contentContainer}>
              <View style={styles.content}>
                <Image style={styles.profilePicture} source={{uri: selectedUser.avatarUrl}}/>
              </View>
              <View style={styles.playerInfo}>
                <Text style={styles.header}>{ selectedUser.username }</Text>
              </View>
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
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    marginLeft: 5,
    marginRight: 5,
  },
  outerContentContainer: {
    flexDirection: 'column',
    backgroundColor: 'transparent',
  },
  contentContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  content: {
    flexDirection: 'row',
  },
  header: {
    alignItems: 'center',
    fontSize: 26,
    fontWeight: 'bold',
    color: 'yellow',
    paddingTop: 10,
    fontFamily: 'Verdana-Bold'
  },
  profilePicture: {
    height: 170,
    width: 170,
    backgroundColor: 'white',
    borderRadius: 90,
    marginTop: 20,
  },
  playerInfo: {
    padding: 40,
    paddingTop: 0,
    backgroundColor: 'transparent',
  },
  sponserPicture: {
    height: 120,
    width: '97.5%',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  followButton: {
    alignSelf: 'center',
    height: 50,
    width: 150,
    marginTop: 20,
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
  },
  linksContainer: {
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  links: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    height: 80,
    width: '95%',
    paddingTop: 10,
    paddingBottom: 10,
    marginLeft: 5,
    justifyContent: 'space-around',
    flexDirection: 'row',
    borderBottomWidth: .5,
    borderColor: 'yellow'
  }
});

const mapStatetoProps = (state) => {
  return {
    selectedUser: state.users.selectedUser
  }
}

const mapDispatchToProps = dispatch => {
  return {

  }
}

module.exports = connect(mapStatetoProps, mapDispatchToProps)(PlayerModal)
