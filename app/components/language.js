import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';

import ghColorReducer from '../utils/gh-color-reducer';

const Root = styled.View`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

const Name = styled.Text`
  font-size: 10;
  color: #999;
`;

const Icon = styled.View`
  height: 10px;
  width: 10px;
  border-radius: 5px;
  background: ${props => ghColorReducer(props.lang)};
  margin: 0 5px;  
`;

const Language = ({ lang }) => (
  <Root>
    <Icon lang={lang} />
    <Name>{lang}</Name>
  </Root>
);

Language.propTypes = {
  lang: PropTypes.string.isRequired,
};

export default Language;
