import React from 'react';
import GlobalStyle from './src/styles/globalStyles';
import { Text } from 'react-native';
import { ThemeProvider } from 'styled-components';
import dark from './src/styles/themes';

export default function App() {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyle />
      <Text>Open up App.tsx to start working on your app!</Text>
    </ThemeProvider>
  );
}
