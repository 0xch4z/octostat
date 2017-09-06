import React from 'react';
import CenterRoot from './center-root';

import Spinner from 'react-native-spinkit';

export default () => (
  <CenterRoot>
    <Spinner type="ThreeBounce" size={75} color="#64b5f6" />
  </CenterRoot>
);
