import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  *{
    @keyframes Show {
      0%{
        opacity: 0;
      }
      100%{
        opacity: 1;
      }
    }
  }
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
    background-color: ${({theme}) => theme.colors.back};
  }
`