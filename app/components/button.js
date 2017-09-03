import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';

const ButtonContainer = styled.TouchableOpacity`
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 20px;
  max-width: 60%;
  border: 2px solid #fff;
  border-radius: 2;
  margin: 10px;
`;

const ButtonText = styled.Text`
  font-size: 20;
  font-weight: 700;
  color: ${props => props.color};
`;

const Button = (props) => {
  const { text, color, onPress } = props;
  return (
    <ButtonContainer
      onPress={onPress}
    >
      <ButtonText
        color={color}
      >
        {text}
      </ButtonText>
    </ButtonContainer>
  );
}

Button.defaultProps = {
  color: '#111',
};

Button.propTypes = {
  onPress: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
};

export default Button;
