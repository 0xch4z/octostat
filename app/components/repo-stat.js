import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';

import format from '../utils/num-formatter';

const Root = styled.View`
  display: flex;
  flex-direction: row;
  margin: 0 10px;  
`;

const Icon = styled.View`
  height: 10px;
  width: 10px;
  border-radius: 5px;
  background: red;
`;

const Count = styled.Text`
  font-size: 10px;
  line-height: 10px;
  margin-left: 2.5px;
  color: #999;
`;

const Stat = ({ metric, count }) => (
  <Root>
    <Icon />
    <Count>{format(count)}</Count>
  </Root>
);

Stat.propTypes = {
  metric: PropTypes.oneOf(['stargazers', 'forks']).isRequired,
  count: PropTypes.number.isRequired,
};

export default Stat;
