import { createGlobalStyle } from "styled-components"
import styled from "styled-components"

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
    h1{
      
      margin: 0;
      padding: 15px;
      color: ${({theme}) => theme.colors.priStrong};
      border-bottom: solid;
      border-color: ${({theme}) => theme.colors.priStrong};
      border-width: 1px;
      text-align: start;
    }
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
    background-color: ${({theme}) => theme.colors.back};
  }
`

export const Content = styled.div`
margin-top: 39%;
`