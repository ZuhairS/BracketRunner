//modules
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { signUpUser, logInUser } from '../../actions/auth_actions';
import { connect } from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput
} from 'react-native';

//components
import AlertContainer from '../alerts/alert_container';
import MyTextInput from './my_text_input';


Auth = class Auth extends Component {
  constructor(props) {
    super(props);

    this.signUp = this.signUp.bind(this);
    this.logIn = this.logIn.bind(this);
  }

  signUp(values) {
     console.log('submitting form', values);
     this.props.signUpUser(values).then(() => {
       this.props.reset();
     }).then(() => {
       if (this.props.state.auth.userId) {
         this.props.navigation.navigate('Tabs');
       }
     });
   }


  logIn(values) {
    this.props.logInUser(values).then(() => {
      this.props.reset();
    }).then(() => {
      if (this.props.state.auth.userId) {
        this.props.navigation.navigate('Tabs');
      }
    });
  }


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text sytle={styles.title}>Email:</Text>
          <Field name="email" component={renderInput} />
          <Text>Username:</Text>
          <Field name="username" component={renderInput} />
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
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#5361A6',
    color: 'white',
    height: 30,
    lineHeight: 30,
    marginTop: 10,
    textAlign: 'center',
    width: 250
  },
  container: {
    backgroundColor: '#C4B585',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
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
  title: {
    color: '#2D3336'
  }
});

const renderInput = ({ input: { onChange, ...restInput } }) => {
  return (
    <TextInput style={styles.input} onChangeText={onChange} {...restInput} />
  );
};

const mapDispatchToProps = dispatch => {
  return {
    signUpUser: user => dispatch(signUpUser(user)),
    logInUser: user => dispatch(logInUser(user))
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

Auth = connect(mapStateToProps, mapDispatchToProps)(Auth);

export default reduxForm({
  form: 'login',
  fields: ['email', 'password'],
  validate: validate
})(Auth);
