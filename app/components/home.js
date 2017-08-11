// //modules
// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   View,
//   TouchableOpacity,
//   NavigatorIOS
// } from 'react-native';
//
// //components
// import Bracket from './bracket';
// import Auth from './auth';
// import SettingsModal from './nav_bar/settings_modal';
// import BracketFeed from './bracket/bracket_feed';
//
// const Home = React.createClass({
//   getInitialState: function() {
//     return {
//       text: 'BracketRunner!'
//     };
//   },
//   navigateToBracket: function() {
//     this.props.navigator.push({
//       component: Bracket,
//       title: 'Bracket',
//       navigationBarHidden: true
//     });
//   },
//   navigateToAuth: function() {
//     this.props.navigator.push({
//       component: Auth,
//       title: 'Auth',
//       navigationBarHidden: true
//     });
//   },
//   render() {
//     return (
//       <View style={HomeStyles.container}>
//         <TextComponent text={this.state.text} />
//         <View style={HomeStyles.body}>
//           <TouchableOpacity onPress={this.navigateToBracket}>
//             <Text>Go to Bracket </Text>
//           </TouchableOpacity>
//           <TouchableOpacity onPress={this.navigateToAuth}>
//             <Text>Go to Auth</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     );
//   }
// });
//
// const HomeStyles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#FFFFFF',
//     width: 400,
//     paddingTop: 25
//   },
//   body: {
//     flex: 9,
//     alignSelf: 'stretch',
//     backgroundColor: '#eee',
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'flex-start',
//     paddingTop: 50
//   }
// });
//
// var mapStatetoProps = bracket => {
//   return {
//     matches: bracket.matches
//   };
// };
//
// module.exports = connect(mapStatetoProps)(Home);
