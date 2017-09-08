import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';

import Language from './language';
import Root from './item-root';
import Stat from './repo-stat';

import Repo from '../assets/images/repo';
import Fork from '../assets/images/fork';

const Top = styled.View`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin-bottom: 10px;
`;

const Heading = styled.View`
  display: flex;
  flex-direction: row;
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

const NoDescription = Description.extend`
  font-style: italic;
`;

const Bottom = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
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
      <Heading>
        {repo.isFork ? <Fork /> : <Repo />}
        <Name>{repo.nameWithOwner}</Name>
      </Heading>
        {repo.description ? <Description>{repo.description}</Description> : <NoDescription>A nondescript repository.</NoDescription>}
    </Top>
    <Bottom>
      { repo.primaryLanguage ? <Language lang={repo.primaryLanguage.name} /> : null }
      <Stats>
        <Stat metric="stargazers" count={repo.stargazers.totalCount} />
        <Stat metric="forks" count={repo.forks.totalCount} />
      </Stats>
    </Bottom>
  </Root>
);

RepoItem.propTypes = {
  repo: PropTypes.shape({
    nameWithOwner: PropTypes.string.isRequired,
    description: PropTypes.string,
    isFork: PropTypes.bool.isRequired,
    primaryLanguage: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
    stargazers: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
    }).isRequired,
    forks: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default RepoItem;
