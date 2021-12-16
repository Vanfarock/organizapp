import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import styled from 'styled-components/native';
import dark from './src/styles/themes';
import Menu from './src/components/menu';

const AppContainer = styled.View`
  border: 1px solid black;
  background-color: ${props => props.theme.backgroundColor.main};
  height: 100%;
`;

export default function App() {
  return (
    <ThemeProvider theme={dark}>
      <AppContainer>
        <Menu />
      </AppContainer>
    </ThemeProvider>
  );
}
