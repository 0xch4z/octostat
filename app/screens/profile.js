import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import { StatusBar, Text, View, Platform } from 'react-native';
import Spinner from 'react-native-spinkit';

import { graphql, gql } from 'react-apollo';

import ProfileHeader from '../components/profile-header';
import CenterRoot from '../components/center-root';
import RepoItem from '../components/repo-item';
import Loading from '../components/loading';
import Error from '../components/error';

  /* align-items: center; */
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

    const pinnedRepos = !user.pinnedRepositories.nodes ? null :
      user.pinnedRepositories.nodes.map((repo) => (
        <RepoItem key={repo.nameWithOwner} repo={repo} />
      ));

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
        {pinnedRepos}
      </Root>
    )
  }
}

const USER_QUERY = gql`
  query UserQuery ($login: String!) {
    user (login: $login) {
      login
      name
      bio
      avatarUrl
      pinnedRepositories (last: 6) {
        totalCount
        nodes {
          nameWithOwner
          description
          primaryLanguage {
            name
          }
          stargazers {
            totalCount
          }
          forks {
            totalCount
          }
        }
      }
      repositories (last: 10) {
        totalCount
        nodes {
          nameWithOwner
          description
          primaryLanguage {
            name
          }
          stargazers {
            totalCount
          }
          forks {
            totalCount
          }
        }
      }
      pullRequests (last: 10) {
        totalCount
        nodes {
          repository {
            nameWithOwner
            description
            primaryLanguage {
              name
            }
            stargazers {
              totalCount
            }
            forks {
              totalCount
            }
          }
        }
      }
      followers (last: 10) {
        totalCount
        nodes {
          login
          avatarUrl
        }
      }
    }
  }
`;

export default graphql(USER_QUERY, {
  options: (ownProps) => ({
    variables: { login: ownProps.navigation.state.params.handle }
  })
})(Profile);
