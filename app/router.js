import React from 'react';
import { StackNavigator, Platform } from 'react-navigation';

import Profile from './screens/profile';
import Repos from './screens/repos';
import Main from './screens/main';

export default StackNavigator({
  Main: {
    screen: Main,
    navigationOptions: {
      header: null,
      tabBarLabel: 'Main',
    },
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      tabBarLabel: 'Profile',
    }
  },
  Repos: {
    screen: Repos,
    navigationOptions: {
      tabBarLabel: 'Repos',
    },
  },
});