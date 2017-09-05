import React from 'react';
import { StackNavigator } from 'react-navigation';

import Main from './screens/main';
import Profile from './screens/profile';

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
      tabBarLabel: 'Info',
    }
  }
});