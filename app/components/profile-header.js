import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';

import Stat from './profile-stat';

const Root = styled.View`
  width: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding: 15px 0;
  border-bottom-width: 2px;
  border-color: #EFEFF2;
`;

const Avatar = styled.Image`
  height: 100px;
  width: 110px;
  border-radius: 5px;
  border-width: 2px;
  border-color: #EFEFF2;
`;

const Name = styled.Text`
  font-size: 14;
  font-weight: 500;
  margin-bottom: 5px;
`;

const Bio = styled.Text`
  font-size: 12;
  font-weight: 400;
  letter-spacing: 0.5px;
  color: #555;
`;

const NoBio = Bio.extend`
  font-style: italic;
`;

const Stats = styled.View`
  flex-grow: 1;
  height: 110px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

const Top = styled.View`
  height: 110px;
  display: flex;
  flex-direction: row;
  margin: 0 15px;
  justify-content: center;
  align-items: center;
`;

const Bottom = styled.View`
  display: flex;
  flex-direction: column;
  margin: 0 15px;
`;

const ProfileHeader = (props) => (
  <Root>
    <Top>
      <Avatar source={{uri: props.avatarUrl}} />
      <Stats>
        <Stat key={1} metric="Repos" value={props.repos} onPress={props.onRepos} />
        <Stat key={2} metric="Pulls" value={props.pulls} onPress={props.onPulls} />
        <Stat key={3} metric="Followers" value={props.followers} onPress={props.onFollowers} />
      </Stats>
    </Top>
    <Bottom>
      <Name>{props.name ? props.name : `@${props.login}`}</Name>
      {props.bio ? <Bio>{props.bio}</Bio> : <NoBio>A nondescript user.</NoBio>}
    </Bottom>
  </Root>
);

ProfileHeader.propTypes = {
  name: PropTypes.string,
  login: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string.isRequired,
  bio: PropTypes.string,
  repos: PropTypes.number.isRequired,
  pulls: PropTypes.number.isRequired,
  followers: PropTypes.number.isRequired,
  onRepos: PropTypes.func.isRequired,
  onPulls: PropTypes.func.isRequired,
  onFollowers: PropTypes.func.isRequired,
};

export default ProfileHeader;
