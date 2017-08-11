import React from 'react';
import { Image, StyleSheet } from 'react-native'
import { TabNavigator, StackNavigator } from 'react-navigation';
// import { Icon } from 'react-native-elements';
// import { list, home } from 'react-native-vector-icons';

// Tab Screens
import HomePage from '../home_page';
import BracketFeed from '../bracket/bracket_feed';
import ProfilePage from '../user/profile_page';
import AuthPage from '../user/auth';
import BracketForm from '../bracket/bracket_form';

// Stack Screens
import BracketDetail from '../bracket/bracket_detail';
import SettingsModal from '../nav_bar/settings_modal';

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
      // tabBarIcon: ({ tintColor }) => <Icon name="home" size={35} color={tintColor} />
    }
  },

  Profile: {
    screen: ProfilePage,
    navigationOptions: {
      tabBarLabel: 'Profile Page',
      // tabBarIcon: ({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor} />
    }
  },

  Auth: {
    screen: AuthPage,
    navigationOptions: {
      tabBarLabel: 'Auth Page',
      // tabBarIcon: ({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor} />
    }
  },

  BracketFeed: {
    screen: bracketStack,
    navigationOptions: {
      tabBarLabel: 'Bracket Feed',
      // tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />
    }
  },
  CreateBracket: {
    screen: BracketForm,
    navigationOptions: {
      title: 'Create Bracket'
    }
  }
});

export const SettingsStack = StackNavigator({
  SettingsModal: {
    screen: SettingsModal,
    navigationOptions: {
      title: 'Settings'
    }
  },
  CreateBracket: {
    screen: BracketForm,
    navigationOptions: {
      title: 'Create Bracket'
    }
  }
});

// export const MenuStack = StackNavigator({
//   Menu: {
//     screen: Menu,
//     navigationOptions: {
//       title: 'Menu'
//     }
//   },
//   CreateBracket: {
//     screen: BracketForm,
//     navigationOptions: {
//       title: 'Create Bracket'
//     }
//   }
// });

export const Root = StackNavigator({
  Tabs: {
    screen: Tabs
  },
  SettingsModal: {
    screen: SettingsStack
  }
}, {
  mode: 'modal',
  headerModal: 'none'
});
