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
import Calendar from './src/pages/calendar';
import { Platform } from 'react-native';
import Header from './src/components/header';
import flexComponent from './src/hoc/flexComponent';

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
            <Route path="/" element={flexComponent(Calendar)} />
            <Route path="home" element={flexComponent(Home)} />
            <Route path="investment" element={flexComponent(Investments)} />
            <Route path="feed" element={flexComponent(Feed)} />
            <Route path="calendar" element={flexComponent(Calendar)} />
            <Route path="settings" element={flexComponent(Settings)} />
          </Routes>
          
          <Menu />
        </AppContainer>
      </NativeRouter>
    </ThemeProvider>
  );
}
