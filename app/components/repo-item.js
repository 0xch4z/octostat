import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';

import Language from './language';
import Stat from './repo-stat';

const Root = styled.View`
  display: flex;
  flex-direction: column;
  min-height: 100px;
  background: #fff;
  border-radius: 10px;
  width: 95%;
  padding: 10px;
  margin: 5px 2.5%;
`;

const Top = styled.View`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin-bottom: 10px;
`;

const Name = styled.Text`
  font-size: 16;
  color: #444;
`;

const Description = styled.Text`
  font-size: 14;
  margin: 5px;
  color: #777;
`;

const Bottom = styled.View`
  display: flex;
  width: 100%;
  flex-direction: row-reverse;
`;

const Stats = styled.View`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
`;

const RepoItem = ({ repo }) => (
  <Root>
    <Top>
      <Name>
        {repo.name ? name : repo.nameWithOwner}
      </Name>
      <Description>{repo.description}</Description>
    </Top>
    <Bottom>
      <Language lang={repo.primaryLanguage.name} />
      <Stats>
        <Stat metric="stargazers" count={repo.stargazers.totalCount} />
        <Stat maetric="forks" count={repo.forks.totalCount} />
      </Stats>
    </Bottom>
  </Root>
);

RepoItem.PropTypes = {
  repo: PropTypes.shape({
    nameWithOwner: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    primaryLanguage: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
    stargazers: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
    }).isRequired,
    forks: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default RepoItem;
