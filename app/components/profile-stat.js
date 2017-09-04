import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';

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
`;

const Metric = styled.Text`
  font-size: 10;
  font-weight: 300;
`;

const ProfileStat = ({ metric, value, onClick }) => {
  // format to thosands if needed
  const val = value > 999 ? `${Math.round(10*(value/1000.0))/10}k` : value;
  return (
    <Root onClick={onClick}>
      <Value>{val}</Value>
      <Metric>{metric}</Metric>
    </Root>
  );
};

ProfileStat.propTypes = {
  metric: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ProfileStat;
