import React from 'react';
import { NativeRouter, Route, Routes } from 'react-router-native';
import { ThemeProvider } from 'styled-components/native';
import styled from 'styled-components/native';
import dark from './src/styles/themes';
import Menu from './src/components/menu';
import Home from './src/pages/home';
import Settings from './src/pages/settings';
import Feed from './src/pages/feed';
import Investments from './src/pages/investments';
import User from './src/pages/user';

const AppContainer = styled.View`
  border: 1px solid black;
  background-color: ${props => props.theme.backgroundColor.main};
  height: 100%;
`;

export default function App() {
  return (
    <ThemeProvider theme={dark}>
      <NativeRouter>
        <AppContainer>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="investment" element={<Investments />} />
            <Route path="feed" element={<Feed />} />
            <Route path="user" element={<User />} />
            <Route path="settings" element={<Settings />} />
          </Routes>
          <Menu />
        </AppContainer>
      </NativeRouter>
    </ThemeProvider>
  );
}
