import React from 'react';
import { Image, StyleSheet } from 'react-native';
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
import ProfilePageForm from '../user/profile_page_form';
import ResultForm from '../bracket/result_form';

// export const HomePageStack = StackNavigator(
//   {
//     Home: {
//       screen: HomePage,
//       navigationOptions: {
//         title: 'Home'
//       }
//     },
//     BracketForm: {
//       screen: BracketForm,
//       navigationOptions: {
//         // title: 'Create Bracket'
//       }
//     }
//   },
//   {
//     mode: 'modal',
//     headerMode: 'none'
//   }
// );

export const ProfilePageStack = StackNavigator({
  ProfilePage: {
    screen: ProfilePage,
    navigationOptions: {
      title: 'Profile'
    }
  },
  ProfilePageForm: {
    screen: ProfilePageForm,
    navigationOptions: {
      title: 'Edit Profile'
    }
  }
});

export const BracketDetailStack = StackNavigator(
  {
    BracketDetail: {
      screen: BracketDetail,
      navigationOptions: {
        // title: 'Bracket Detail'
      }
    },
    PlayerModal: {
      screen: PlayerModal,
      navigationOptions: {
        // title: 'Player Modal'
      }
    }
  },
  {
    mode: 'modal',
    headerMode: 'none'
  }

);

export const BracketStack = StackNavigator({
  BracketFeed: {
    screen: BracketFeed,
    navigationOptions: {
      // title: 'Bracket Feed'
    }
  },
  BracketDetail: {
    screen: BracketDetailStack,
    navigationOptions: {
      // title: 'Bracket Detail'
    }
  },
  ResultForm: {
    screen: ResultForm,
    navigationOptions: {
      // title: 'Edit Results'
    }
  }
});

export const Tabs = TabNavigator({
  // Home: {
  //   screen: HomePageStack,
  //   navigationOptions: {
  //     tabBarLabel: 'Home',
  //     tabBarIcon: ({ tintColor }) =>
  //       <Icon name="home" size={35} color={tintColor} />
  //   }
  // },
  ProfilePage: {
    screen: ProfilePageStack,
    navigationOptions: {
      tabBarLabel: 'Profile Page',
      tabBarIcon: ({ tintColor }) =>
        <Icon name="account-circle" size={35} color={tintColor} />
    }
  },
  BracketFeed: {
    screen: BracketStack,
    navigationOptions: {
      tabBarLabel: 'Bracket Feed',
      tabBarIcon: ({ tintColor }) =>
        <Icon name="list" size={35} color={tintColor} />
    }
  }
});

export const BracketFormStack = StackNavigator({
  BracketForm: {
    screen: BracketForm,
    navigationOptions: {
      title: 'Create Bracket'
    }
  },
  BracketDetail: {
    screen: BracketDetail,
    navigationOptions: {
      title: 'Bracket Detail'
    }
  },
  ResultForm: {
    screen: ResultForm,
    navigationOptions: {
      // title: 'Edit Results'
    }
  }
});

export const AuthPageStack = StackNavigator({
  AuthPage: {
    screen: AuthPage
  }
});

export const Root = StackNavigator(
  {
    Auth: {
      screen: AuthPage
    },
    Tabs: {
      screen: Tabs
    },
    BracketForm: {
      screen: BracketFormStack
    }
  },
  {
    headerMode: 'none'
  }
);
