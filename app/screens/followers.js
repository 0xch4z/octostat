import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import { StatusBar, Platform } from 'react-native';

import FollowerItem from '../components/follower-item';
import NoItems from '../components/no-items';
import CenterRoot from '../components/center-root';

const Root = styled.ScrollView`
  display: flex;
  flex-direction: column; 
  height: 100%;
`;

class Pulls extends Component {
  static navigationOptions = ({ navigation }) => {
    const { state, setParams } = navigation;
    const { handle } = state.params;
    return {
      title: `@${handle.toLowerCase()}'s Followers`,
    };
  };

  render() {
    const { state } = this.props.navigation;
    const $followers = state.params.followers;
    const followers = $followers.length ? $followers.map(user => (
        <FollowerItem key={user.id} user={user} navigation={this.props.navigation} />
      )) : <NoItems fullscreen what="followers" />;

    return (
      <Root>
        <StatusBar barStyle="default" />
        {followers}
      </Root>
    );
  }
}

export default Pulls;
