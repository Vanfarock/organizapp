import React from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Link } from 'react-router-native';

const MenuContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  
  position: absolute;
  bottom: 0;
  
  width: 100%;
  
  border-top-width: 1px;
  border-top-style: solid;
  border-top-color: ${props => props.theme.backgroundColor.contrast};
  `;

const MenuItem = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  width: 100%;
  
  padding: 10px 0;
`;

export default function Menu() {
  const DEFAULT_ICON_SIZE = 25;

  return (
    <MenuContainer>
      <MenuItem underlayColor={'transparent'} to="feed">
        <Icon name="users" size={DEFAULT_ICON_SIZE} color="white" />
      </MenuItem>
      <MenuItem underlayColor={'transparent'} to="investment">
        <Icon name="money" size={DEFAULT_ICON_SIZE} color="white" />
      </MenuItem>
      <MenuItem underlayColor={'transparent'} to="home">
        <Icon name="home" size={DEFAULT_ICON_SIZE} color="white" />
      </MenuItem>
      <MenuItem underlayColor={'transparent'} to="user">
        <Icon name="user" size={DEFAULT_ICON_SIZE} color="white" />
      </MenuItem>
      <MenuItem underlayColor={'transparent'} to="settings">
        <Icon name="gears" size={DEFAULT_ICON_SIZE} color="white" />
      </MenuItem>
    </MenuContainer>
  )
}
