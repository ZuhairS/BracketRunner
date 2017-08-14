//modules
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  NavigatorIOS,
  TextInput
} from 'react-native';
//imported components
import AlertContainer from '../alerts/alert_container';
import { Field, reduxForm } from 'redux-form';

BracketForm = class BracketForm extends Component {
  constructor(props) {
    super(props);

    this.date = Date.now();
  }

  createBracket(values) {
    
    console.log('submitting form', values);
    // this.props.updateUser(values);
  }

  renderInput({ input: { onChange, ...restInput } }) {
    return (
      <TextInput style={styles.input} onChangeText={onChange} {...restInput} />
    );
  }

  submit(values) {
    console.log('submitting form', values);
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>

          <Field name="title" component={renderInput} label="Bracket Name"/>

          <Field name="game" component={renderInput} label="Bracket Name"/>

          <Field name="player1" component={renderInput} label="player1"/>

          <Field name="player2" component={renderInput} label="player2"/>

          <Field name="player3" component={renderInput} label="player3"/>

          <Field name="player4" component={renderInput} label="player4"/>

          <Field name="player5" component={renderInput} label="player5"/>

          <Field name="player6" component={renderInput} label="player6"/>

          <Field name="player7" component={renderInput} label="player7"/>

          <Field name="player8" component={renderInput} label="player8"/>

          <TouchableOpacity
            onPress={this.props.handleSubmit(this.createBracket)}
          >
            <Text style={styles.button}>Create Bracket</Text>
          </TouchableOpacity>
        </View>
        <AlertContainer />
      </View>
    );
  }
};

const renderInput = ({ label, input: { onChange, ...restInput } }) => {
  return (
    <TextInput placeholder={label} style={styles.input} onChangeText={onChange} {...restInput} placeholderTextColor='#333' />
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#333',
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
  },
  container: {
    backgroundColor: '#333',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'

  },
  input: {
    color: '#333',
    borderColor: '#404000',
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 20,
    borderWidth: 1,
    marginTop: 10,
    height: 35,
    width: 250,
    textAlign: 'center',
    fontSize: 16,
  },
  title: {
    color: '#2D3336'
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    alignSelf: 'center',
    marginBottom: 40
  }
});

const mapDispatchToProps = dispatch => {
  return {};
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

BracketForm = connect(mapStateToProps, mapDispatchToProps)(BracketForm);

export default reduxForm({
  form: 'BracketForm',
  fields: ['email', 'password'],
  validate: validate
})(BracketForm);
