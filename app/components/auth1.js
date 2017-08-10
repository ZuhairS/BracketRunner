//modules
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { signUpUser } from '../actions/auth_actions'
import { connect } from 'react-redux';

//component
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import AlertContainer from './alerts/alert_container';
import MyTextInput from './my_text_input';

import Home from './home';

var Auth = React.createClass({
  navigateToHome: function() {
    this.props.navigator.pop({
      component: Home,
      title: 'Home',
      navigationBarHidden: true
    });
  },
  signUp: function(values){
    console.log('submitting form', values)
    console.log(this.props);
    this.props.signUpUser(values);
  },
  logIn: function(values){
    console.log('submitting form', values)
  },
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.titleContainer}>
          <Text sytle={styles.title}>
            Email:
          </Text>
          <Field name="email" component={renderInput} />
          <Text>Password:</Text>
          <Field name="password" component={renderInput} />
          <TouchableOpacity onPress={this.props.handleSubmit(this.signUp)}>
            <Text style={styles.button}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.props.handleSubmit(this.logIn)}>
            <Text style={styles.button}>Log In</Text>
          </TouchableOpacity>

        </View>


      <AlertContainer />
      </View>
    );
  }
});


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
  title:{
    color: '#2D3336'
  }
})

const renderInput = ({ input: { onChange, ...restInput }}) => {
  return <TextInput style={styles.input} onChangeText={onChange} {...restInput} />
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUpUser: user => dispatch(signUpUser(user)),
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


Auth = connect(
    mapStateToProps,
    mapDispatchToProps
)(Auth);

export default reduxForm({
  form: 'login',
  fields: ['email', 'password'],
  validate: validate
})(Auth)
