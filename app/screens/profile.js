import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import { StatusBar, Text, View, Platform } from 'react-native';
import Spinner from 'react-native-spinkit';

import { graphql } from 'react-apollo';

import { GET_USER } from '../graphql/queries';

import ProfileHeader from '../components/profile-header';
import CenterRoot from '../components/center-root';
import RepoItem from '../components/repo-item';
import NoRepos from '../components/no-repos';
import Loading from '../components/loading';
import Error from '../components/error';

const Root = styled.ScrollView`
  display: flex;
  flex-direction: column; 
  height: 100%;
  font-family: ${ Platform.OS === 'ios' ? 'Helvetica Neue' : 'Roboto' };
`;

class Profile extends Component {
  static propTypes = {
    data: PropTypes.shape({
      loading: PropTypes.bool,
      error: PropTypes.object,
      user: PropTypes.object,
    }).isRequired,
  };

  static navigationOptions = ({ navigation }) => {
    const { state, setParams } = navigation;
    const { handle } = state.params;
    return {
      title: `@${handle.toLowerCase()}`,
    }
  };

  render() {
    if (this.props.data.error) {
      console.log('ERR: ', this.props.data.error) ;
      return <Error />;
    }

    if (this.props.data.loading || !this.props.data.user) {
      console.log('LOADING: ', this.props.data);
      return <Loading />;
    }

    const { user } = this.props.data;

    // make pinned repo set
    let repos;
    if (user.pinnedRepositories.totalCount) {
      repos = user.pinnedRepositories.nodes.map((repo) => (
        <RepoItem key={repo.nameWithOwner} repo={repo} />
      ));
    } else if (user.repositories.totalCount) {
      repos = user.repositories.nodes.map((repo) => (
        <RepoItem key={repo.nameWithOwner} repo={repo} />
      ));
    } else {
      repos = <NoRepos />;
    }

    return (
      <Root
        contentContainerStyle={{alignItems: 'center'}}
        showsVerticalScrollIndicator={false}
        horizontal={false}
        refresh={this}
      >
        <StatusBar barStyle="default" />
        <ProfileHeader
          name={user.name}
          login={user.login}
          avatarUrl={user.avatarUrl}
          bio={user.bio}
          repos={user.repositories.totalCount}
          pulls={user.pullRequests.totalCount}
          followers={user.followers.totalCount}
        />
        {repos}
      </Root>
    )
  }
}

export default graphql(GET_USER, {
  options: (ownProps) => ({
    variables: { login: ownProps.navigation.state.params.handle }
  })
})(Profile);
