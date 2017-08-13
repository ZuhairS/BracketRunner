import React, {Component} from 'react';
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

import {RkConfig, RkText, RkCard} from 'react-native-ui-kitten';


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

  }

  componentDidMount(){
    console.log("ProfilePage");
    console.log(this.props);
  }

  aboutMe() {
    let user = this.props.state.auth.user
      if (user.aboutMe) {
        return (
          <RkCard rkType='shadowed'>
            <View rkCardHeader>
              <Text>About</Text>
            </View>
            <View rkCardContent>
              <Text>{user.aboutMe}</Text>
            </View>
          </RkCard>
       );
   } else {
     return (
      <RkCard rkType='shadowed'>
        <View rkCardHeader>
          <Text>About</Text>
        </View>
        <View rkCardContent>
          <Text>Write somting about yourself</Text>
        </View>
      </RkCard>
     );
   }
 }

 youTube() {
   let user = this.props.state.auth.user
      if (user.youtubeUrl) {
        return (
          <Text>{user.youtubeUrl}</Text>
      );
    } else {
      return (
        <Text>Add your Youtube link</Text>
      );
    }
  }

  twitch() {
    let user = this.props.state.auth.user
       if (user.twitchUrl) {
         return (
           <Text>{user.twitchUrl}</Text>
       );
     } else {
       return (
         <Text>Add your twitch link</Text>
       );
     }
   }

   twitter() {
     let user = this.props.state.auth.user
        if (user.twitterUrl) {
          return (
            <Text>{user.twitterUrl}</Text>
        );
      } else {
        return (
          <Text>Add your twitter link</Text>
        );
      }
    }

    sponserImage() {
      let user = this.props.state.auth.user
         if (user.twitterUrl) {
           return (
             <Text>{user.sponserImageUrl}</Text>
         );
       } else {
         return (
           <Text>Add your sponsers Image link</Text>
         );
       }
     }

     sponserName() {
       let user = this.props.state.auth.user
          if (user.sponserName) {
            return (
              <Text>{user.sponserName}</Text>
          );
        } else {
          return (
            <Text>Add your Sponsers Name link</Text>
          );
        }
      }



  onEditPress(){
    this.props.navigation.navigate('ProfilePageForm');
  }

  render() {
    let user = this.props.state.auth.user
    return (
      <View>
        <ImageBackground source={{uri: 'https://i.pinimg.com/originals/c6/bd/1f/c6bd1f3632d8147c0d21e879a5b86132.png'}}
                       style={styles.profileBackground}>
          <View/>
          <TouchableOpacity style={styles.playerPicture} onPress={() => this.onEditPress()}>
            <Icon name="edit" size={35} style={styles.edit_icon} />
          </TouchableOpacity>
          <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
                 style={styles.avatar}/>
          <RkText style={styles.nameText}>
            {user.username} {user.email}
          </RkText>
        </ImageBackground>

        {this.aboutMe()}


        <RkCard rkType='shadowed'>

          <View rkCardHeader>
            <Text>Social Media</Text>
          </View>

          <View rkCardContent>
            <Text>Youtube: {this.youTube()}</Text>
            <Text>Twitch: {this.twitch()}</Text>
            <Text>Twitter: {this.twitter()}</Text>
          </View>

        </RkCard>

        <RkCard rkType='shadowed'>

          <View rkCardHeader>
            <Text>Sponsorship</Text>
          </View>

          <View rkCardContent>
            <Text>Sponser Image {this.sponserImage()}</Text>
            <Text>Sponser Name {this.sponserName()}</Text>
          </View>

        </RkCard>

    </View>
    )
  }

}

const styles = StyleSheet.create({
  edit_icon:{
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
  }
});

const mapDispatchToProps = (dispatch) => {
  return {
    editUser: user => dispatch(editUser(user))
  };
};

const mapStateToProps = (state) => {
  return {
    state
  };
};

const validate = (formProps) => {
  var errors = {};
  return errors;
}


ProfilePage = connect(
    mapStateToProps,
    mapDispatchToProps
)(ProfilePage);

export default reduxForm({
  form: 'login',
  fields: ['email', 'password'],
  validate: validate
})(ProfilePage)
