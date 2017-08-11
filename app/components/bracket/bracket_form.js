//modules
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';
import { Field, reduxForm } from 'redux-form'


export default class BracketForm extends Component {
  constructor(props) {
    super(props);

  }

  renderInput({ input: { onChange, ...restInput }}) {
    return (
      <TextInput style={styles.input} onChangeText={onChange} {...restInput} />
    );
  }

  submit(values) {
    console.log('submitting form', values)
  }

  render() {
    const { handleSubmit } = this.props
    return (
      <View style={styles.container}>
        <Text>Tournament Name:</Text>
        <Field name="name" component={this.renderInput} />

        <Text>Number of Entries:</Text>
        <Field name="number" component={this.renderInput} />

        <TouchableOpacity>
          <Text style={styles.button}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white'
  },
  fields: {
    paddingTop: 30
  },
  inputField: {
    height: 20,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 4,
    paddingTop: 20
  }
});

module.exports = reduxForm({
  form: 'test'
})(BracketForm)
