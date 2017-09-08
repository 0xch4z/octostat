import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';

import format from '../utils/num-formatter';

const Root = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 60px;
  background: #fff;
  align-self: flex-end;
`;

const Value = styled.Text`
  font-size: 20;
  font-weight: 700;
  margin-bottom: 3px;
  color: #444;
`;

const Metric = styled.Text`
  font-size: 10;
  font-weight: 300;
`;

const ProfileStat = ({ metric, value, onPress }) => {
  // format to thosands if needed
  return (
    <Root onPress={onPress}>
      <Value>{format(value)}</Value>
      <Metric>{metric}</Metric>
    </Root>
  );
};

ProfileStat.propTypes = {
  metric: PropTypes.oneOf(['Repos', 'Pulls', 'Followers']).isRequired,
  value: PropTypes.number.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default ProfileStat;
