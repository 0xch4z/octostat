import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import { StatusBar, Platform } from 'react-native';

import RepoItem from '../components/repo-item';

const Root = styled.ScrollView`
  display: flex;
  flex-direction: column; 
  height: 100%;
  font-family: ${ Platform.OS === 'ios' ? 'Helvetica Neue' : 'Roboto' };
`

class Repos extends Component {
  static navigationOptions = ({ navigation }) => {
    const { state, setParams } = navigation;
    const { handle } = state.params;
    return {
      title: `@${handle.toLowerCase()}'s Repos`,
    };
  };

  render() {
    const { state } = this.props.navigation;
    const repos = state.params.repos.map(repo => (
      <RepoItem repo={repo} />
    ));
    console.log('REPOS', state.params.repos);

    return (
      <Root>
        <StatusBar barStyle="default" />
        {repos}
      </Root>
    );
  }
}

export default Repos;