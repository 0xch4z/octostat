import React from 'react';
import styled from 'styled-components/native';

import ErrorImage from '../assets/error';
import CenterRoot from './center-root';

const ErrorMessage = styled.Text`
  font-size: 20px;
  font-weight: 500;
  color: #444;
`;

export default ({ errorMessage }) => (
  <CenterRoot background="#EAE9EF">
    <ErrorImage />
    <ErrorMessage>
      {errorMessage ? errorMessage : "An Error Occured!"}
    </ErrorMessage>
  </CenterRoot>
);
