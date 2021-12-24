import React from 'react'
import { View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import styled, { useTheme } from 'styled-components/native'
import Button from '../shared/button';

const SignUpContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  width: 100%;
`;

const Header = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  
  width: 100%;

  margin-bottom: 15px;
`;

const EditIcon = styled(Icon)`
  color: ${props => props.theme.backgroundColor.contrast};
`;

const ProfilePicture = styled.Image`
  width: 200px;
  height: 200px;

  margin-bottom: 30px;

  border-radius: 50%;
`;

const Input = styled.TextInput`
  width: 100%;
  padding: 20px;
  margin: 3px;

  background-color: ${props => props.theme.foregroundColor};
  color: ${props => props.theme.backgroundColor.contrast};

  text-align: center;
`;

export default function Settings() {
  const DEFAULT_ICON_SIZE = 20;
  const theme = useTheme();

  return (
    <SignUpContainer>
      <Header>
        <Button type="clear" icon={<EditIcon name="edit" size={DEFAULT_ICON_SIZE} />} />
      </Header>
      <ProfilePicture source={require('../assets/images/koala.jpg')} />
      <Input placeholderTextColor={theme.backgroundColor.contrast + '90'} placeholder="Nome de usuário" />
      <Input placeholderTextColor={theme.backgroundColor.contrast + '90'} placeholder="Email" />
      <Input placeholderTextColor={theme.backgroundColor.contrast + '90'} placeholder="Senha" />
    </SignUpContainer>
  );
}
