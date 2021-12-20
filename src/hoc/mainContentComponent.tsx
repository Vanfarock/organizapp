import React from 'react'
import styled from 'styled-components/native';

const MainContentView = styled.View`
  flex: 1;
  padding: 0 ${props => props.theme.horizontalWhitespace};
`;

export default function mainContentComponent(Component: React.ComponentType) : JSX.Element {
  return (
    <MainContentView>
      <Component />
    </MainContentView>
  )
} 

