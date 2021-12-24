import React from 'react';
import { NativeRouter, Route, Routes } from 'react-router-native';
import styled, { ThemeProvider } from 'styled-components/native';
import dark from './src/styles/themes';
import Menu from './src/components/menu';
import Home from './src/pages/home';
import Settings from './src/pages/settings';
import Feed from './src/pages/feed';
import Investments from './src/pages/investments';
import Calendar from './src/pages/calendar';
import { Platform } from 'react-native';
import Header from './src/components/header';
import mainContentComponent from './src/hoc/mainContentComponent';

const AppContainer = styled.SafeAreaView`
  flex: 1;
  overflow: scroll;
  
  height: 100%;
  padding-top: ${() => Platform.OS === 'android' ? '25px' : '0'};
  
  border: 1px solid black;
  background-color: ${props => props.theme.backgroundColor.main};
`;

export default function App() {
  return (
    <ThemeProvider theme={dark}>
      <NativeRouter>
        <AppContainer>
          <Header />

          <Routes>
            <Route path="/" element={mainContentComponent(Settings)} />
            <Route path="home" element={mainContentComponent(Home)} />
            <Route path="investment" element={mainContentComponent(Investments)} />
            <Route path="feed" element={mainContentComponent(Feed)} />
            <Route path="calendar" element={mainContentComponent(Calendar)} />
            <Route path="settings" element={mainContentComponent(Settings)} />
          </Routes>

          <Menu />
        </AppContainer>
      </NativeRouter>
    </ThemeProvider>
  );
}
