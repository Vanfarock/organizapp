import React from 'react'
import { TextProps } from 'react-native'
import styled from 'styled-components/native'

const StyledText = styled.Text`
  color: ${props => props.theme.backgroundColor.contrast};
  /* font-family: ${props => props.theme.fontFamily}; */
`;

export default function Text(props: TextProps) {
  return (
    <StyledText {...props} >{props.children}</StyledText>
  )
}
