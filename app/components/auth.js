// import React from 'react';
// import { Field, reduxForm } from 'redux-form';
//
// import {
//   StyleSheet,
//   Text,
//   View,
//   TouchableOpacity,
//   ScrollView,
//   TextInput,
// } from 'react-native';
//
// import MyTextInput from './MyTextInput';
//
// import Home from './home';
//
// var Auth = React.createClass({
//   navigateToHome: function() {
//     this.props.navigator.pop({
//       component: Home,
//       title: 'Home',
//       navigationBarHidden: true
//     });
//   },
//   signUp: function(values){
//     console.log('submitting form', values)
//     console.log(this.props);
//   },
//   logIn: function(values){
//     console.log('submitting form', values)
//   },
//   render() {
//     console.log(this.props);
//     return (
//       <View style={styles.container}>
//       <Text>Email:</Text>
//       <Field name="email" component={renderInput} />
//       <Text>Password:</Text>
//       <Field name="password" component={renderInput} />
//       <TouchableOpacity onPress={this.props.handleSubmit(this.signUp)}>
//         <Text style={styles.button}>Sign Up</Text>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={this.props.handleSubmit(this.logIn)}>
//         <Text style={styles.button}>Log In</Text>
//       </TouchableOpacity>
//     </View>
//     );
//   }
// });
//
//
// const styles = StyleSheet.create({
//   button: {
//     backgroundColor: 'blue',
//     color: 'white',
//     height: 30,
//     lineHeight: 30,
//     marginTop: 10,
//     textAlign: 'center',
//     width: 250
//   },
//   container: {
//
//   },
//   input: {
//     borderColor: 'black',
//     borderWidth: 1,
//     height: 37,
//     width: 250
//   }
// })
//
// const renderInput = ({ input: { onChange, ...restInput }}) => {
//   return <TextInput style={styles.input} onChangeText={onChange} {...restInput} />
// }
//
// export default reduxForm({
//   form: 'test'
// },null, mapDispatchToProps)(Auth)
