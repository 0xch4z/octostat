import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import { StatusBar, Text } from 'react-native';

import { graphql, gql } from 'react-apollo';

import ProfileHeader from '../components/profile-header';

const Root = styled.View`
  display: flex;
  align-items: center;
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
    }
  };

  render() {
    if (this.props.data.error) {
      console.log(this.props.data.error) ;
      return <Text>There was an Error! ):</Text>;
    }

    if (this.props.data.loading || !this.props.data.user) {
      console.log('loading: ', this.props.data);
      return <Text>Loading...</Text>
    }

    const { user } = this.props.data;

    return (
      <Root>
        <StatusBar barStyle="default" />
        <ProfileHeader
          name={user.name}
          avatarUrl={user.avatarUrl}
          bio={user.bio}
          repos={user.repositories.totalCount}
          pulls={user.pullRequests.totalCount}
          followers={user.followers.totalCount}
        />
      </Root>
    )
  }
}

const USER_QUERY = gql`
  query UserQuery ($login: String!) {
    user (login: $login) {
      name
      bio
      avatarUrl
      repositories (last: 10) {
        totalCount
        nodes {
          name
          primaryLanguage {
            name
          }
        }
      }
      pullRequests (last: 10) {
        totalCount
        nodes {
          repository {
            name
            nameWithOwner
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
