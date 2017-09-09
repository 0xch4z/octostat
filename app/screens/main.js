import React, { Component } from 'react';
import styled from 'styled-components/native';
import Svg from 'react-native-svg-uri';
import { StatusBar, Keyboard } from 'react-native';

import Button from '../components/button';
import ErrorModal from '../components/error-modal';

import Octocat from '../assets/images/octocat';

const Root = styled.KeyboardAvoidingView`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #64b5f6;
  height: 100%;
`;

const Input = styled.TextInput`
  height: 40px;
  width: 80%;
  max-width: 350px;
  background: rgb(149,204,249);
  margin: 10px;
  border-radius: 2;
  padding: 3px;
  color: #fff;
`;

const Heading = styled.Text`
  font-size: 32;
  color: #fff;
`;

export default class Main extends Component {
  state = {
    handle: '',
    disabled: true,
    modalVisible: false,
    modalMessage: '',
  };

  onInputChange = (text) => {
    this.setState({
      disabled: !/^@?[a-z0-9\-_]{1,39}$/i.test(text),
      handle: text
    });
  };

  onButtonPress = () => {
    const { handle } = this.state;
    Keyboard.dismiss();
    if (!handle) {
      // the handle field is empty
      this.setState({
        modalVisible: true,
        modalMessage: 'Enter a user\'s handle to continue!',
      });
      return;
    } else if (!/^@?[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,40}$/i.test(handle)) {
      // the user has entered an invalid username, according to gh's spec
      this.setState({
        modalVisible: true,
        modalMessage: 'Invalid Github handle!',
      });
      return;
    }
    this.props.navigation.navigate('Profile', {
      handle: handle.startsWith('@') ? handle.slice(1) : handle
    });
  };

  onModalHidePress = () => {
    this.setState({
      modalVisible: false,
    });
  };

  render() {
    return (
      <Root behavior="padding">
        <StatusBar
          barStyle="light-content"
        />
        <Octocat />
        <Input
          placeholder="Github Handle"
          placeholderTextColor="#ededed"
          autoCorrect={false}
          autoCapitalize="none"
          onChangeText={(text) => this.onInputChange(text)}
          value={this.state.handle}
        />
        <Button
          disabled={this.state.disabled}
          onPress={this.onButtonPress}
          text="Get Stats!"
          color="#64b5f6"
        />
        <ErrorModal
          visible={this.state.modalVisible}
          message={this.state.modalMessage}
          onHidePress={this.onModalHidePress}
        />
      </Root>
    );
  }
}
