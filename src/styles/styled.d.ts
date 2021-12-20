import 'styled-components/native';

interface IPalette {
  main: string;
  contrast: string;
}

declare module 'styled-components/native' {
  export interface DefaultTheme {
    fontFamily: string,
    
    horizontalWhitespace: string,
    
    foregroundColor: string,
    backgroundColor: IPallete,
    
    navColor: string,

    feedColor: string,
    investmentColor: string,
    homeColor: string,
    calendarColor: string,
    settingsColor: string,

    [key: string]: string | IPalette;
  }
}