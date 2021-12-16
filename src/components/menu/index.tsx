import React from 'react';
import styled from 'styled-components/native';
import { Linking } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const MenuContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  
  position: absolute;
  bottom: 0;
  
  width: 100%;
  padding: 10px;

  border: 1px solid red;
`;

const MenuItem = styled(Button)`
  background-color: transparent;
`;

export default function Menu() {
  const DEFAULT_ICON_SIZE = 25;

  return (
    <MenuContainer>
      <MenuItem
        type="clear"
        icon={<Icon name="users" size={DEFAULT_ICON_SIZE} color="white" />} 
        onPress={() => Linking.openURL("https://google.com")} />
      <MenuItem
        type="clear"
        icon={<Icon name="money" size={DEFAULT_ICON_SIZE} color="white" />} 
        onPress={() => Linking.openURL("https://google.com")} />
      <MenuItem
        type="clear"
        icon={<Icon name="home" size={DEFAULT_ICON_SIZE} color="white" />} 
        onPress={() => Linking.openURL("https://google.com")} />
      <MenuItem
        type="clear"
        icon={<Icon name="user" size={DEFAULT_ICON_SIZE} color="white" />} 
        onPress={() => Linking.openURL("https://google.com")} />
      <MenuItem
        type="clear"
        icon={<Icon name="gears" size={DEFAULT_ICON_SIZE} color="white" />} 
        onPress={() => Linking.openURL("https://google.com")} />
    </MenuContainer>
  )
}
