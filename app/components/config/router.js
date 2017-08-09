import React from 'react';
import { Image, StyleSheet } from 'react-native'
import { TabNavigator, StackNavigator } from 'react-navigation';
// import { Icon } from 'react-native-elements';

// Tab Screens
import HomePage from '../home_page';
import BracketFeed from '../bracket/bracket_feed';
import BracketDetail from '../bracket/bracket_detail';

export const bracketStack = StackNavigator({
  Bracket: {
    screen: BracketFeed,
    navigationOptions: {
      title: 'Bracket',
    }
  },
  BracketDetail: {
    screen: BracketDetail,
    navigationOptions: {
      title: 'Bracket Detail'/*({ state }) => `${state.params.name.first.toUpperCase()}`*/
    }
  }
});

export const Tabs = TabNavigator({
  Home: {
    screen: HomePage,
    navigationOptions: {
      tabBarLabel: 'Home'
        // icon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />
    }
  },

  Bracket: {
    screen: BracketFeed,
    navigationOptions: {
      tabBarLabel: 'Home'
        // icon: ({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor} />
    }
  }
});
