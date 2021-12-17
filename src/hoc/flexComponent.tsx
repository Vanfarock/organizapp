import React from 'react'
import styled from 'styled-components/native';

interface FlexProps {
  Component: React.ComponentType;
}

const FlexView = styled.View`
  flex: 1;
`;

export default function flexComponent(Component: React.ComponentType) : JSX.Element {
  return (
    <FlexView>
      <Component />
    </FlexView>
  )
} 

