import React from 'react';
import styled from 'styled-components/native';

const Root = styled.View`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Text = styled.Text`
  font-size: 16;
  color: #444;
`;

export default () => (
  <Root>
    <Text>
      User has no repositories! 😢
    </Text>
  </Root>
);
