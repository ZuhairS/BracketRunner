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
  TextInput,
  Image
} from 'react-native';

//components
import AlertContainer from '../alerts/alert_container';
import { requestLiveBrackets } from '../../actions/bracket_actions';


Auth = class Auth extends Component {
  constructor(props) {
    super(props);

    this.signUp = this.signUp.bind(this);
    this.logIn = this.logIn.bind(this);
    this.guestAccount = this.guestAccount.bind(this);
  }

  signUp(values) {
    this.props
      .signUpUser(values)
      .then(() => {
        this.props.reset();
      })
      .then(() => {
        if (this.props.state.auth.userId) {
          this.props.navigation.navigate('Tabs');
        }
      });
      this.props.requestLiveBrackets();
  }

  guestAccount(values) {
    this.props
      .logInUser({email:"guest@guest.com", password:"guest"})
      .then(() => {
        this.props.reset();
      })
      .then(() => {
        if (this.props.state.auth.userId) {
          this.props.navigation.navigate('Tabs');
        }
      });
  }

  logIn(values) {
    this.props
      .logInUser(values)
      .then(() => {
        this.props.reset();
      })
      .then(() => {
        if (this.props.state.auth.userId) {
          this.props.navigation.navigate('Tabs');
        }
      });
      this.props.requestLiveBrackets();
  }

  render() {
    return (
      <Image source={ {uri: 'https://www.walldevil.com/wallpapers/a39/shoutbox-twitter-background-gamers-style-images-twisted.jpg'} } style={styles.container}>
        <Image source={require('./logo.png')}
               style={styles.avatar}/>
        <View style={styles.titleContainer}>

          <Field name="email" component={renderInput} label="Email" />

          <Field name="username" component={renderInput} label="Username"/>

          <Field name="password" component={renderPasswordInput} label="Password" />

          <TouchableOpacity onPress={this.props.handleSubmit(this.signUp)}>
            <Text style={styles.button}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.props.handleSubmit(this.logIn)}>
            <Text style={styles.button}>Log In</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.props.handleSubmit(this.guestAccount)}>
            <Text style={styles.button_guest}>Guest Account</Text>
          </TouchableOpacity>
        </View>
        <AlertContainer />
      </Image>
    );
  }
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'transparent',
    borderColor: 'yellow',
    color: 'white',
    lineHeight: 30,
    textAlign: 'center',
    padding: 5,
    borderRadius: 20,
    borderWidth: 2,
    marginTop: 10,
    height: 45,
    width: 250,
    fontSize: 16,
    fontFamily: 'Verdana'
  },
  button_guest: {
    backgroundColor: 'transparent',
    borderColor: 'yellow',
    color: 'yellow',
    lineHeight: 30,
    textAlign: 'center',
    padding: 5,
    borderRadius: 20,
    borderWidth: 2,
    marginTop: 10,
    height: 45,
    width: 250,
    fontSize: 20,
    fontFamily: 'Verdana-Bold'
  },
  container: {
    backgroundColor: 'transparent',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    color: '#333',
    borderColor: '#404000',
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 20,
    borderWidth: 1,
    marginTop: 10,
    height: 45,
    width: 250,
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'Verdana',
  },
  title: {
    color: '#2D3336'
  },
  avatar: {
    width: 200,
    height: 120,

    alignSelf: 'center',
    marginBottom: 40,
    backgroundColor: 'transparent',
  }
});

const renderInput = ({ label, input: { onChange, ...restInput } }) => {
  return (
    <TextInput placeholder={label} style={styles.input} onChangeText={onChange} {...restInput} placeholderTextColor='#333' />
  );
};

const renderPasswordInput = ({ label, input: { onChange, ...restInput } }) => {
  return (
    <TextInput placeholder={label} secureTextEntry={true} style={styles.input} onChangeText={onChange} {...restInput} placeholderTextColor='#333' />
  );
};

const mapDispatchToProps = dispatch => {
  return {
    signUpUser: user => dispatch(signUpUser(user)),
    logInUser: user => dispatch(logInUser(user)),
    requestLiveBrackets: () => dispatch(requestLiveBrackets())
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
