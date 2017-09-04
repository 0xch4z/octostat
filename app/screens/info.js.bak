import React, { Component } from 'react';
import styled from 'styled-components/native';
import {
  Text,
  View,
  StatusBar
} from 'react-native';
import Spinner from 'react-native-spinkit';


const Root = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #f48fb1;
  height: 100%;
`;

const MyHeading = styled.Text`
  font-size: 32;
  color: #fff;
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
        <Spinner type={'ThreeBounce'} size={75} color="#fff" />
      </Root>
    );
  }
}
