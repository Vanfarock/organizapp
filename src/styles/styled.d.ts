import 'styled-components';interface IPalette {
  main: string
  contrast: string
}

declare module 'styled-components' {
  export interface DefaultTheme {
    backgroundColor: IPallete,
  }
}