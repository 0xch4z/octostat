import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';

import Commit from '../assets/images/commit';
import Merge from '../assets/images/merge';

import Language from './language';
import Root from './item-root';
import Stat from './repo-stat';

const Top = styled.View`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin-bottom: 10px;
`;

const Repo = styled.View`
  display: flex;
  flex-direction: row;
`;

const RepoName = styled.Text`
  font-size: 16;
  color: #444;
  margin-bottom: 2px;
`;

const Title = styled.Text`
  font-size: 14;
  color: #555;
`;

const CommitNode = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-left: 10;
`;

const CommitName = styled.Text`
  font-size: 12;
  color: #666;
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

const PullItem = ({ pull }) => {
  const commits = pull.commits.nodes.map(({ commit }, index) => (
    <CommitNode key={index}>
      <Commit />
      <CommitName> {commit.message}</CommitName>
    </CommitNode>
  ));
  return (
    <Root>
      <Top>
        <Repo>
          <Merge merged={pull.merged} />
          <RepoName>{pull.repository.nameWithOwner}</RepoName>
        </Repo>
        <Title>
          {pull.title}
        </Title>
        {commits}
      </Top>
      <Bottom>
        { pull.repository.primaryLanguage ? <Language lang={pull.repository.primaryLanguage.name} /> : null }
        <Stats>
          <Stat metric="stargazers" count={pull.repository.stargazers.totalCount} />
          <Stat metric="forks" count={pull.repository.forks.totalCount} />
        </Stats>
      </Bottom>
    </Root>
  );
};

export default PullItem;
