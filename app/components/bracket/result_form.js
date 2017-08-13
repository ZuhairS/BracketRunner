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




ProfilePageForm = class ProfilePageForm extends Component {
  constructor(props) {
    super(props);

    this.onReportResult = this.onReportResult.bind(this);
  }

  onReportResult(values){
    console.log("submitting form");
    console.log(values);
    // this.props.setResult(user).then(() => {
    // this.props.reset();
    // }).then(() =>{
    //   this.props.navigation.navigate('ProfilePage');
    // });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text >player 1:</Text>
          <Field name="player1_result" component={renderInput} />
          <Text >player 2:</Text>
          <Field name="player2_result" component={renderInput} />
          <TouchableOpacity onPress={this.props.handleSubmit(this.onReportResult)}>
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
    setResult: result => dispatch(setResult(result))
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


ProfilePageForm = connect(
    mapStateToProps,
    mapDispatchToProps
)(ProfilePageForm);

export default reduxForm({
  form: 'result_form',
  fields: ['player1_result', 'player2_result'],
  validate: validate
})(ProfilePageForm)
