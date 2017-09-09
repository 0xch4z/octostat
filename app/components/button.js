import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';

const Root = styled.TouchableOpacity`
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 20px;
  min-width: ${props => props.width ? props.width : '40%'};
  border-width: 2px;
  border-color: #fff;
  border-radius: 2;
  margin: 10px;
`;

const Text = styled.Text`
  font-size: 20;
  font-weight: 700;
  color: ${props => props.color};
`;

const Button = ({ text, color, onPress, width }) => {
  return (
    <Root onPress={onPress} width={width}>
      <Text color={color}>
        {text}
      </Text>
    </Root>
  );
}

Button.defaultProps = {
  color: '#111',
};

Button.propTypes = {
  onPress: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  width: PropTypes.string,
};

export default Button;
