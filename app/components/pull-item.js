import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';

import Language from './language';
import Root from './item-root';
import Stat from './repo-stat';

const Top = styled.View`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin-bottom: 10px;
`;

const Name = styled.Text`
  font-size: 16;
  color: #444;
  margin-bottom: 2px;
`;

const Title = styled.Text`
  font-size: 14;
  color: #555;
`;

const Commit = styled.Text`
  font-size: 12;
  margin-left: 10px;  
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

const PullItem = ({ pull }) => (
  <Root>
    <Top>
      <Name>
        {pull.repository.nameWithOwner}
      </Name>
      <Title>
        "{pull.title}"
      </Title>
      { pull.commits.nodes.map(({ commit }) => <Commit>+= {commit.message}</Commit>) }
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

export default PullItem;
