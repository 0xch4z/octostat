import React from 'react';
import styled from 'styled-components/native';
import Button from './button';

import NativeModal from 'react-native-modal';

const Modal = styled(NativeModal)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.View`
  background: #283546;
  height: 200px !important;
  width: 90% !important;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
`;

const Top = styled.View`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Bottom = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Heading = styled.Text`
  color: #fff;
  font-size: 20;
  font-weight: 700;
`;

const Message = styled.Text`
  color: #fff;
  font-size: 14;
  font-weight: 500;
`;

export default ({ visible, message, onHidePress }) => {
  return (
    <Modal
      backdropColor="#000"
      backdropOpacity="0.3"
      isVisible={visible}
    >
      <Container>
        <Top>
          <Heading>Error!</Heading>
          <Message>
            {message}
          </Message>
        </Top>
        <Bottom>
          <Button
            onPress={onHidePress}
            text="Okay"
            width="60%"
            color="#283546"
          />
        </Bottom>
      </Container>
    </Modal>
  )
};
