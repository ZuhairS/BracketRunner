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



ProfilePage = class ProfilePage extends Component {
  constructor(props) {
    super(props);
  }

  updateUser(values){
    console.log('submitting form', values);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text >Picture:</Text>
          <Field name="picture" component={renderInput} />
          <Text >Twitter:</Text>
          <Field name="twitter" component={renderInput} />
          <Text>Twitch:</Text>
          <Field name="twitch" component={renderInput} />
          <Text>YouTube:</Text>
          <Field name="youTube" component={renderInput} type="text" />
          <Text>Sponsor:</Text>
          <Field name="sponsor" component={renderInput} />
          <Text>Sponsor Picture:</Text>
          <Field name="sponsor_picture" component={renderInput} />
          <Text>About:</Text>
          <Field name="about" component={renderMultiLineInput} />
          <TouchableOpacity onPress={this.props.handleSubmit(this.updateUser)}>
            <Text style={styles.button}>Sign Up</Text>
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
    signUpUser: user => dispatch(signUpUser(user)),
    logInUser: user => dispatch(logInUser(user))

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
