import React from 'react';
import styled from 'styled-components/native';

const ErrorImage = styled.Image`
  height: 75px;
  width: 75px;
`;

const ErrorMessage = styled.Text`
  font-size: 20px;
  font-weight: 500;
  color: #444;
`;

import CenterRoot from './center-root';

export default ({ errorMessage }) => (
  <CenterRoot background="#EAE9EF">
    <ErrorImage source={require('../assets/images/Error.png')} />
    <ErrorMessage>
      {errorMessage ? errorMessage : "An Error Occured!"}
    </ErrorMessage>
  </CenterRoot>
);
