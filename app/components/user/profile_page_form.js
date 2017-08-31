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
import { Field, reduxForm } from 'redux-form';
import { editUser } from '../../actions/user_actions';



ProfilePageForm = class ProfilePageForm extends Component {
  constructor(props) {
    super(props);

    this.updateUser = this.updateUser.bind(this);
  }

  updateUser(values){
    const user = Object.assign(this.props.state.auth.user, values);
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

          <Field name="avatarUrl" component={renderInput} label="Avatar URL"/>

          <Field name="twitterUrl" component={renderInput} label="Twitter" />

          <Field name="twitchUrl" component={renderInput}label="Twitch" />

          <Field name="youtubeUrl" component={renderInput} type="text" label="YouTube"/>

          <Field name="sponserName" component={renderInput} label="Sponsor"/>

          <Field name="sponserImageUrl" component={renderInput} label="Sponsor Picture URL"/>

          <Field name="aboutMe" component={renderMultiLineInput} label="About"/>
          <TouchableOpacity onPress={this.props.handleSubmit(this.updateUser)}>
            <Text style={styles.button}>Submit</Text>
          </TouchableOpacity>
        </View>
      <AlertContainer />
      </View>
    );
  }

}

const renderInput = ({ label, input: { onChange, ...restInput } }) => {
  return (
    <TextInput placeholder={label} style={styles.input} onChangeText={onChange} {...restInput} placeholderTextColor='#333' />
  );
};


const renderMultiLineInput = ({ label, input: { onChange, ...restInput }}) => {
  return <TextInput placeholder={label} multiline = {true} numberOfLines = {4} style={styles.inputs} onChangeText={onChange} {...restInput} />
}

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
    fontSize: 18,
    fontFamily: 'Verdana-Bold'
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
    height: 45,
    width: 250,
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'Verdana'
  },
  inputs: {
    color: '#333',
    borderColor: '#404000',
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 20,
    borderWidth: 1,
    marginTop: 10,
    height: 90,
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
  },
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


ProfilePageForm = connect(
    mapStateToProps,
    mapDispatchToProps
)(ProfilePageForm);

export default reduxForm({
  form: 'ProfilePageForm',
  fields: ['avatarUrl', 'twitterUrl'],
  validate: validate
})(ProfilePageForm)
