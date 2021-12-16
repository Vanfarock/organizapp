import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: ${props => props.theme.backgroundColor.constrast};
  }

  body {
    background-color: ${props => props.theme.backgroundColor.main};
  }
`;

export default GlobalStyle;