import React from 'react';
import { Image, StyleSheet } from 'react-native'
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
// import { list, home } from 'react-native-vector-icons';

// Tab Screens
import HomePage from '../home_page';
import BracketFeed from '../bracket/bracket_feed';

// Stack Screens
import BracketDetail from '../bracket/bracket_detail';


export const bracketStack = StackNavigator({
  BracketFeed: {
    screen: BracketFeed,
    navigationOptions: {
      title: 'Bracket Feed',
    }
  },
  BracketDetail: {
    screen: BracketDetail,
    navigationOptions: {
      title: 'Bracket Detail'/*({ state }) => `${state.params.name.toUpperCase()}`*/
    }
  }
});

export const Tabs = TabNavigator({
  Home: {
    screen: HomePage,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => <Icon name="home" size={35} color={tintColor} />
    }
  },

  BracketFeed: {
    screen: bracketStack,
    navigationOptions: {
      tabBarLabel: 'Bracket Feed',
      tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />
    }
  },

  // BracketDetail: {
  //   screen: BracketDetail,
  //   navigationOptions: {
  //     tabBarLabel: 'Bracket Detail'
  //       // icon: ({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor} />
  //   }
  // }
});
