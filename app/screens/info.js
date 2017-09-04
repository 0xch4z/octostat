import React, { Component } from 'react';
import styled from 'styled-components/native';
import { StatusBar } from 'react-native';

import ProfileHeader from '../components/profile-header';

const Root = styled.View`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100%;
`;

export default class foo extends Component {
  static navigationOptions = ({ navigation }) => {
    const { state, setParams } = navigation;
    const { user } = state.params;
    return {
      title: user.startsWith('@') ? user : `@${user}`,
    }
  }

  render() {
    return (
      <Root>
        <StatusBar barStyle="default" />
        <ProfileHeader
          name="Charles Kenney"
          bio="I love swift and javascript!"
          repos={9090}
          pulls={60}
          followers={90}
        />
      </Root>
    );
  }
}
