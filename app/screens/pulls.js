import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import { StatusBar, Platform } from 'react-native';

import PullItem from '../components/pull-item';
import NoItems from '../components/no-items';
import CenterRoot from '../components/center-root';

const Root = styled.ScrollView`
  display: flex;
  flex-direction: column; 
  height: 100%;
  font-family: ${ Platform.OS === 'ios' ? 'Helvetica Neue' : 'Roboto' };
`

class Pulls extends Component {
  static navigationOptions = ({ navigation }) => {
    const { state, setParams } = navigation;
    const { handle } = state.params;
    return {
      title: `@${handle.toLowerCase()}'s Pulls`,
    };
  };

  render() {
    const { state } = this.props.navigation;
    const pullRequests = state.params.pulls;
    const pulls = pullRequests.length ? pullRequests.map(pull => (
        <PullItem key={pull.id} pull={pull} />
      )) : <NoItems fullscreen what="pulls" />;

    return (
      <Root>
        <StatusBar barStyle="default" />
        {pulls}
      </Root>
    );
  }
}

export default Pulls;
