import React from 'react';
import styled, { IPalette } from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Link, useLocation, useMatch } from 'react-router-native';

const MenuContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  width: 100%;
  
  background-color: ${props => props.theme.backgroundColor.main};
  border-top-width: 1px;
  border-top-color: ${props => props.theme.backgroundColor.contrast};
`;

const MenuItem = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  width: 100%;
  
  padding: 10px 0;
`;

const MenuIcon = styled(Icon)`
  color: ${props => props.theme.navColor};
`;

interface MenuIconCustomColor {
  customColor: string;
}

const MenuActiveIcon = styled(Icon) <MenuIconCustomColor>`
  color: ${props => (props.theme[props.customColor + 'Color'] as IPalette).main};
`;

interface MenuItemInfo {
  route: string;
  icon: string;
}

export default function Menu() {
  const DEFAULT_ICON_SIZE = 25;
  const DEFAULT_PAGE = 'settings';

  const location = useLocation();

  const items: MenuItemInfo[] = [
    { route: 'feed', icon: 'users' },
    { route: 'investment', icon: 'money' },
    { route: 'home', icon: 'home' },
    { route: 'calendar', icon: 'calendar' },
    { route: 'settings', icon: 'gears' },
  ];

  const renderActiveMenuItem = (item: MenuItemInfo) => (
    <MenuItem key={item.icon}
      underlayColor={'transparent'}
      to={item.route}>
      <MenuActiveIcon name={item.icon} size={DEFAULT_ICON_SIZE} customColor={item.route} />
    </MenuItem>
  )

  const renderMenuItem = (item: MenuItemInfo) => (
    <MenuItem key={item.icon}
      underlayColor={'transparent'}
      to={item.route}>
      <MenuIcon name={item.icon} size={DEFAULT_ICON_SIZE} />
    </MenuItem>
  );

  return (
    <MenuContainer>
      {items.map((item: MenuItemInfo) => {
        const match = useMatch(item.route);

        if ((!location || !location.pathname || location.pathname === '/') && DEFAULT_PAGE === item.route) {
          return renderActiveMenuItem(item);
        }

        if (match) {
          return renderActiveMenuItem(item);
        } else {
          return renderMenuItem(item);
        }
      })}
    </MenuContainer>
  )
}
