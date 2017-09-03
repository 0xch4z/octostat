import React from 'react';
import { StackNavigator } from 'react-navigation';

import Main from './screens/main';
import Info from './screens/info';

export default StackNavigator({
  Main: {
    screen: Main,
    navigationOptions: {
      header: null,
      tabBarLabel: 'Main',
    },
  },
  Info: {
    screen: Info,
    navigationOptions: {
      tabBarLabel: 'Info',
    }
  }
});