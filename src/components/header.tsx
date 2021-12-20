import React from 'react'
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Link } from 'react-router-native';
import styled from 'styled-components/native'
import Logo from './logo';

const HeaderContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5px ${props => props.theme.horizontalWhitespace};
`;

export default function Header() {
  const DEFAULT_ICON_SIZE = 20;

  return (
    <HeaderContainer>
      <Button 
        type="clear" 
        icon={<Icon name="bell" size={DEFAULT_ICON_SIZE} color="white" />} />
      
      <Link to="/"><Logo /></Link>
      
      <Button 
        type="clear" 
        icon={<Icon name="search" size={DEFAULT_ICON_SIZE} color="white" />} />
    </HeaderContainer>
  )
}
