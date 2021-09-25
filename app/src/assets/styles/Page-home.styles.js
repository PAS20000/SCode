import styled from "styled-components";

export const Title = styled.h1`
margin: 0;
padding: 15px;
color: ${({theme}) => theme.colors.priStrong};
border-bottom: solid;
border-color: ${({theme}) => theme.colors.priStrong};
border-width: 1px;
text-align: start;
`

export const Content = styled.article`
margin-top: 39%;
`