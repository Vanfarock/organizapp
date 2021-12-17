import React from 'react'
import styled from 'styled-components/native'

const StyledLog = styled.Text`
  color: ${props => props.theme.backgroundColor.contrast};
  letter-spacing: 1px;
`;

export default function Logo() {
  return (
    <StyledLog>ORGANIZAPP</StyledLog>
  )
}
