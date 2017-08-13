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
  }


  onEditPress(){
    this.props.navigation.navigate('ProfilePageForm');
  }

  render() {
    console.log(this.props);
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
          {"f name"} {"l name"}
        </RkText>
        </ImageBackground>
              <RkCard rkType='shadowed'>
                <View rkCardHeader>
                  <Text>Header</Text>
                </View>
            <Image source={{uri: 'https://i.pinimg.com/originals/c6/bd/1f/c6bd1f3632d8147c0d21e879a5b86132.png'}}/>
            <View rkCardContent>
              <Text> quick brown fox jumps over the lazy dog</Text>
            </View>
            <View rkCardFooter>
              <Text>Footer</Text>
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
    backgroundColor: 'green',
    paddingLeft: 20,
    paddingVertical: 5,
    fontSize: 32,
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
