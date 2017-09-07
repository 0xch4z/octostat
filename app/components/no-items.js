import React from 'react';
import styled from 'styled-components/native';

const Root = styled.View`
  display: flex !important;
  flex-grow: 1;  
  align-items: center;
  justify-content: center;
  ${props => props.fs ? 'height: 100%;' : '\n'}
`;

const Text = styled.Text`
  font-size: 16;
  color: #444;
`;

export default ({ what, fullscreen }) => (
  <Root fs={fullscreen}>
    <Text>
      User has no {what}! 😢
    </Text>
  </Root>
);
