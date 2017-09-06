import styled from 'styled-components/native';

export default styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  background: ${props => props.background ? props.background : '#fff'};
`;
