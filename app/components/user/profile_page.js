import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity
} from 'react-native';
import { Icon } from 'react-native-elements';

import { RkConfig, RkText, RkCard } from 'react-native-ui-kitten';

ProfilePage = class ProfilePage extends Component {
  constructor(props) {
    super(props);

    this.onEditPress = this.onEditPress.bind(this);
    this.aboutMe = this.aboutMe.bind(this);
    this.youTube = this.youTube.bind(this);
    this.twitch = this.twitch.bind(this);
    this.twitter = this.twitter.bind(this);
    this.sponserImage = this.sponserImage.bind(this);
    this.sponserName = this.sponserName.bind(this);
    this.userImage = this.userImage.bind(this);
  }

  aboutMe() {
    let user = this.props.state.auth.user;
    if (user.aboutMe) {
      return (
        <RkCard rkType="shadowed" style={styles.tab2}>
          <View rkCardHeader>
            <Text style={styles.header}>About</Text>
          </View>
          <View rkCardContent>
            <Text style={styles.userText}>
              {user.aboutMe}
            </Text>
          </View>
        </RkCard>
      );
    } else {
      return (
        <RkCard rkType="shadowed" style={styles.tab2}>
          <View rkCardHeader>
            <Text style={styles.header}>About</Text>
          </View>
          <View rkCardContent>
            <Text style={styles.userText}>Write somting about yourself</Text>
          </View>
        </RkCard>
      );
    }
  }

  youTube() {
    let user = this.props.state.auth.user;
    if (user.youtubeUrl) {
      return (
        <Text style={styles.userText}>
          {user.youtubeUrl}
        </Text>
      );
    } else {
      return <Text style={styles.userText}>Add your Youtube link</Text>;
    }
  }

  twitch() {
    let user = this.props.state.auth.user;
    if (user.twitchUrl) {
      return (
        <Text style={styles.userText}>
          {user.twitchUrl}
        </Text>
      );
    } else {
      return <Text style={styles.userText}>Add your twitch link</Text>;
    }
  }

  twitter() {
    let user = this.props.state.auth.user;
    if (user.twitterUrl) {
      return (
        <Text style={styles.userText}>
          {user.twitterUrl}
        </Text>
      );
    } else {
      return <Text style={styles.userText}>Add your twitter link</Text>;
    }
  }

  sponserImage() {
    let user = this.props.state.auth.user;
    if (user.sponserImageUrl) {
      return (
        <Image source={{ uri: user.sponserImageUrl }} style={styles.avatar} />
      );
    } else {
      return <Text style={styles.userText}>Add your sponsers Image link</Text>;
    }
  }

  userImage() {
    let user = this.props.state.auth.user;
    if (user.avatarUrl) {
      return (
        <Image source={{ uri: user.avatarUrl }} style={styles.avatar} />
      );
    } else {
      return <Image
        source={require('./react_native.png')}
        style={styles.avatar}
      />
    }
  }

  sponserName() {
    let user = this.props.state.auth.user;
    if (user.sponserName) {
      return (
        <Text style={styles.userText}>
          {user.sponserName}
        </Text>
      );
    } else {
      return <Text style={styles.userText}>Add your Sponsers Name</Text>;
    }
  }

  onEditPress() {
    this.props.navigation.navigate('ProfilePageForm');
  }

  render() {
    let user = this.props.state.auth.user;
    return (
      <View>
        <ImageBackground
          source={require('./default.png')}
          style={styles.profileBackground}
        >
          <View />
          <TouchableOpacity
            style={styles.playerPicture}
            onPress={() => this.onEditPress()}
          >
            <Icon name="edit" size={35} style={styles.edit_icon} />
          </TouchableOpacity>
        {this.userImage()}
          <RkText style={styles.nameText}>
            {user.username} {user.email}
          </RkText>
        </ImageBackground>

        {this.aboutMe()}

        <RkCard rkType="shadowed" style={styles.tab2}>
          <View rkCardHeader>
            <Text style={styles.header}>Social Media</Text>
          </View>

          <View rkCardContent>
            <Text style={styles.userText}>
              You Tube: {this.youTube()}
            </Text>
            <Text style={styles.userText}>
              Twitch: {this.twitch()}
            </Text>
            <Text style={styles.userText}>
              Twitter: {this.twitter()}
            </Text>
          </View>
        </RkCard>

        <RkCard rkType="shadowed" style={styles.tab3}>
          <View rkCardHeader>
            <Text style={styles.header}>Sponsorship</Text>
          </View>

          <View rkCardContent>
            <View style={styles.sponserContainer}>
              <Text style={styles.userText}>
                Sponser Name {this.sponserName()}
              </Text>
              {this.sponserImage()}
            </View>
          </View>
        </RkCard>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  edit_icon: {
    alignSelf: 'flex-end',
    paddingRight: 15
  },
  profileBackground: {
    width: null,
    height: 220,
    justifyContent: 'flex-end',
    alignItems: 'stretch'
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    alignSelf: 'center'
  },
  nameText: {
    backgroundColor: '#333',
    paddingLeft: 20,
    paddingVertical: 5,
    fontSize: 25,
    color: 'white'
  },
  tab1: {
    backgroundColor: '#424242'
  },
  tab2: {
    backgroundColor: '#424242'
  },
  tab3: {
    backgroundColor: '#424242'
  },
  header: {
    color: 'yellow'
  },
  userText: {
    color: 'white'
  },
  sponserContainer: {}
});

const mapDispatchToProps = dispatch => {
  return {
    editUser: user => dispatch(editUser(user))
  };
};

const mapStateToProps = state => {
  return {
    state
  };
};

const validate = formProps => {
  var errors = {};
  return errors;
};

ProfilePage = connect(mapStateToProps, mapDispatchToProps)(ProfilePage);

export default reduxForm({
  form: 'login',
  fields: ['email', 'password'],
  validate: validate
})(ProfilePage);
