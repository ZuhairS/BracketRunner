import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  NavigatorIOS,
  TextInput,
} from 'react-native';
//imported components
import AlertContainer from '../alerts/alert_container';
import MyTextInput from './my_text_input';
import { Field, reduxForm } from 'redux-form';
import { editUser } from '../../actions/user_actions';



ProfilePage = class ProfilePage extends Component {
  constructor(props) {
    super(props);

    this.updateUser = this.updateUser.bind(this);
  }

  updateUser(values){
    const user = Object.assign(this.props.state.auth, values);
    this.props.editUser(user).then(() => {
    this.props.reset();
    }).then(() =>{
      this.props.navigation.navigate('ProfilePage');
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text >Avatar URL:</Text>
          <Field name="avatarUrl" component={renderInput} />
          <Text >Twitter:</Text>
          <Field name="twitterUrl" component={renderInput} />
          <Text>Twitch:</Text>
          <Field name="twitchUrl" component={renderInput} />
          <Text>YouTube:</Text>
          <Field name="youtubeUrl" component={renderInput} type="text" />
          <Text>Sponsor:</Text>
          <Field name="sponserName" component={renderInput} />
          <Text>Sponsor Picture URL:</Text>
          <Field name="sponserImageUrl" component={renderInput} />
          <Text>About:</Text>
          <Field name="aboutMe" component={renderMultiLineInput} />
          <TouchableOpacity onPress={this.props.handleSubmit(this.updateUser)}>
            <Text style={styles.button}>Submit</Text>
          </TouchableOpacity>
        </View>
      <AlertContainer />
      </View>
    );
  }

}

const renderInput = ({ input: { onChange, ...restInput }}) => {
  return <TextInput style={styles.input} onChangeText={onChange} {...restInput} />
}

const renderMultiLineInput = ({ input: { onChange, ...restInput }}) => {
  return <TextInput multiline = {true} numberOfLines = {4} style={styles.inputs} onChangeText={onChange} {...restInput} />
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#5361A6',
    color: 'white',
    height: 30,
    lineHeight: 30,
    marginTop: 10,
    textAlign: 'center',
    width: 250,
  },
  container: {
    backgroundColor: '#C4B585',
    flex : 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    color: 'white',
    borderColor: 'black',
    padding: 5,
    borderRadius: 5,
    borderWidth: 1,
    height: 37,
    width: 250
  },
  inputs: {
    color: 'white',
    borderColor: 'black',
    padding: 5,
    borderRadius: 5,
    borderWidth: 1,
    height: 74,
    width: 250
  },
  title:{
    color: '#2D3336'
  }
})

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
