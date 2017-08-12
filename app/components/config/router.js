import React from 'react';
import { Image, StyleSheet } from 'react-native'
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

// Tab Screens
import HomePage from '../home_page';
import BracketFeed from '../bracket/bracket_feed';
import ProfilePage from '../user/profile_page';
import AuthPage from '../user/auth';

// Stack Screens
import BracketDetail from '../bracket/bracket_detail';
import Menu from '../modals/menu';
import BracketForm from '../bracket/bracket_form';
import PlayerModal from '../modals/player_modal';

export const HomePageStack = StackNavigator({
  Home: {
    screen: HomePage,
    navigationOptions: {
      title: 'Home'
    }
  }
});

export const ProfilePageStack = StackNavigator({
  ProfilePage: {
    screen: ProfilePage,
    navigationOptions: {
      title: 'Profile Page'
    }
  }
});

export const BracketDetailStack = StackNavigator({
  BracketDetail: {
    screen: BracketDetail,
    navigationOptions: {
      title: 'Bracket Detail'
    }
  },
  PlayerModal: {
    screen: PlayerModal,
    navigationOptions: {
      title: 'Player Modal'
    }
  }
}, {
  mode: 'modal',
  headerMode: 'none'
});

export const BracketStack = StackNavigator({
  BracketFeed: {
    screen: BracketFeed,
    navigationOptions: {
      title: 'Bracket Feed'
    }
  },
  BracketDetail: {
    screen: BracketDetailStack,
    navigationOptions: {
      title: 'Bracket Detail'
    }
  }
});

export const Tabs = TabNavigator({
  Home: {
    screen: HomePageStack,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => <Icon name="home" size={35} color={tintColor} />
    }
  },
  ProfilePage: {
    screen: ProfilePageStack,
    navigationOptions: {
      tabBarLabel: 'Profile Page',
      tabBarIcon: ({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor} />
    }
  },
  BracketFeed: {
    screen: BracketStack,
    navigationOptions: {
      tabBarLabel: 'Bracket Feed',
      tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />
    }
  },
});

export const BracketFormStack = StackNavigator({
  BracketForm: {
    screen: BracketForm,
    navigationOptions: {
      title: 'Create Bracket'
    }
  }
});

export const Root = StackNavigator({
  Auth: {
    screen: AuthPage,
  },
  Tabs: {
    screen: Tabs
  },
  BracketForm: {
    screen: BracketFormStack
  }
}, {
  mode: 'modal',
  headerMode: 'none'
});
