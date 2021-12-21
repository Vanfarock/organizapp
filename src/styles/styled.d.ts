import 'styled-components/native';

declare module 'styled-components/native' {
  export interface IPalette {
    main: string;
    contrast: string;
  }
  
  export interface DefaultTheme {
    fontFamily: string,
    
    horizontalWhitespace: string,
    
    foregroundColor: string,
    backgroundColor: IPallete,
    
    navColor: string,

    feedColor: IPallete,
    investmentColor: IPallete,
    homeColor: IPallete,
    calendarColor: IPallete,
    settingsColor: IPallete,

    [key: string]: string | IPalette;
  }
}