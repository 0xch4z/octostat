import React, { PureComponent } from 'react';
import styled from 'styled-components/native';

const Root = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  min-height: 60px;
  background: #fff;
  border-radius: 10px;
  width: 95%;
  padding: 10px;
  margin: 5px 2.5%;
`;

const Left = styled.View`
  display: flex;
  width: 70px;
  align-items: center;
  justify-content: center;
`;

const Right = styled.View`
  display: flex;
  flex-grow: 1;
  margin-left: 10px;
  justify-content: center;  
`;

const Avatar = styled.Image`
  height: 50px;
  width: 50px;
  border-radius: 5px;
  border-width: 2px;
  border-color: #EFEFF2;
`;

const Handle = styled.Text`
  font-size: 14;
`;

class FollowerItem extends PureComponent {
  onPress = () => {
    const { navigation, user } = this.props;
    navigation.navigate('Profile', {
      handle: user.login,
      login: user.login,
    });
  }

  render() {
    const { user } = this.props;
    return (
      <Root onPress={this.onPress}>
        <Left>
          <Avatar source={{uri: user.avatarUrl}} />
        </Left>
        <Right>
          <Handle>@{user.login}</Handle>
        </Right>
      </Root>
    );
  }
}

export default FollowerItem;
