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
  TextInput,
} from 'react-native';
//imported components
import AlertContainer from '../alerts/alert_container';
import MyTextInput from '../user/my_text_input';
import { Field, reduxForm } from 'redux-form';



BracketForm = class BracketForm extends Component {
  constructor(props) {
    super(props);

    this.date = Date.now();
  }

  createBracket(values){
    console.log('submitting form', values);
    // this.props.updateUser(values);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text >Bracket Name:</Text>
          <Field name="bracket_name" component={renderInput} />
          <Text >Player 1:</Text>
          <Field name="player1" component={renderInput} />
          <Text>Player 2:</Text>
          <Field name="player2" component={renderInput} />
          <Text>Player 3:</Text>
          <Field name="player3" component={renderInput} />
          <Text>Player 4:</Text>
          <Field name="player4" component={renderInput} />
          <Text>Player 5:</Text>
          <Field name="player5" component={renderInput} />
          <Text>Player 6:</Text>
          <Field name="player6" component={renderInput} />
          <Text>Player 7:</Text>
          <Field name="player7" component={renderInput} />
          <Text>Player 8:</Text>
          <Field name="player8" component={renderInput} />

          <TouchableOpacity onPress={this.props.handleSubmit(this.createBracket)}>
            <Text style={styles.button}>Create Bracket</Text>
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


BracketForm = connect(
    mapStateToProps,
    mapDispatchToProps
)(BracketForm);

export default reduxForm({
  form: 'login',
  fields: ['email', 'password'],
  validate: validate
})(BracketForm)
