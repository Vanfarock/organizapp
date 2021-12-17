import 'styled-components/native';

interface IPalette {
  main: string;
  contrast: string;
}

declare module 'styled-components/native' {
  export interface DefaultTheme {
    horizontalWhitespace: string,
    foregroundColor: string,
    backgroundColor: IPallete,
    calendarColor: IPalette,
  }
}