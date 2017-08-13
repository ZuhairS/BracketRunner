import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Image,
  ImageBackground
} from 'react-native';

import {RkConfig, RkText} from 'react-native-ui-kitten';

export default class ProfilePage extends Component {

  componentWillMount(){
  console.log('profile mounted');
  }

  render() {
    console.log(this.props);
    return (
      <View>
      <ImageBackground source={{uri: 'https://i.pinimg.com/originals/c6/bd/1f/c6bd1f3632d8147c0d21e879a5b86132.png'}}
             style={styles.profileBackground}>
        <View/>
        <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
               style={styles.avatar}/>
        <RkText style={styles.nameText}>
          {"f name"} {"l name"}
        </RkText>
      </ImageBackground>
      <RkText style={styles.nameText}>
        {"f name"} {"l name"}
      </RkText>
      <RkText style={styles.nameText}>
        {"f name"} {"l name"}
      </RkText>
      <RkText style={styles.nameText}>
        {"f name"} {"l name"}
      </RkText>
      <RkText style={styles.nameText}>
        {"f name"} {"l name"}
      </RkText>
    </View>
    )
  }

}

const styles = StyleSheet.create({
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
    backgroundColor: 'green',
    paddingLeft: 20,
    paddingVertical: 5,
    fontSize: 32,
    color: 'white'
  }
});
