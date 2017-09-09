import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import { StatusBar } from 'react-native';

import { graphql } from 'react-apollo';

import { GET_USER } from '../graphql/queries';

import ProfileHeader from '../components/profile-header';
import CenterRoot from '../components/center-root';
import RepoItem from '../components/repo-item';
import NoItems from '../components/no-items';
import Loading from '../components/loading';
import Error from '../components/error';

const Root = styled.ScrollView`
  display: flex;
  flex-direction: column; 
  height: 100%;
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
    };
  };

  onReposPress = () => {
    const { navigation, data } = this.props;
    const { nodes } = data.user.repositories;
    const { handle } = navigation.state.params;
    navigation.navigate('Repos', {
      repos: nodes,
      handle,
    });
  }

  onPullsPress = () => {
    const { navigation, data } = this.props;
    const { nodes } = data.user.pullRequests;
    const { handle } = navigation.state.params;
    navigation.navigate('Pulls', {
      pulls: nodes,
      handle,
    });
  }

  onFollowersPress = () => {
    const { navigation, data } = this.props;
    const { nodes } = data.user.followers;
    const { handle } = navigation.state.params;
    navigation.navigate('Followers', {
      followers: nodes,
      handle,
    });
  }

  render() {
    if (this.props.data.error) {
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
      repos = user.repositories.nodes.slice(0, 6).map((repo) => (
        <RepoItem key={repo.nameWithOwner} repo={repo} />
      ));
    } else {
      repos = <NoItems what="repositories" />;
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
          onRepos={this.onReposPress}
          pulls={user.pullRequests.totalCount}
          onPulls={this.onPullsPress}
          followers={user.followers.totalCount}
          onFollowers={this.onFollowersPress}
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
