import styled from "styled-components";

export const Title = styled.h1`
margin: 0;
padding: 15px;
color: ${({theme}) => theme.colors.priStrong};
background-color: ${({theme}) => theme.colors.surface};
border-style: solid;
border-color: ${({theme}) => theme.colors.priStrong};
border-width: 1px;
border-top: none;
`

export const Content = styled.article`
margin-top: 39%;
`