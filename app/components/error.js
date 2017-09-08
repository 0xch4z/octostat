import React from 'react';
import styled from 'styled-components/native';

import Image from '../assets/images/error';
import Root from './center-root';

const Message = styled.Text`
  font-size: 20px;
  font-weight: 500;
  color: #444;
`;

export default ({ message }) => (
  <Root background="#EAE9EF">
    <Image />
    <Message>
      {message ? message : "An Error Occured!"}
    </Message>
  </Root>
);
