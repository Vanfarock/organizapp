import React from 'react'
import { View } from 'react-native'
import styled from 'styled-components/native'

const WhiteText = styled.Text`
  color: ${props => props.theme.backgroundColor.contrast};
`;

export default function Settings() {
  return (
    <View>
      <WhiteText>Settings</WhiteText>
    </View>
  )
}
