import styled from "styled-components";

export const Title = styled.h1`
margin: 0;
padding: 15px;
color: white;
background-color: ${({theme}) => theme.colors.surface};
border-style: solid;
border-color: ${({theme}) => theme.colors.pri};
border-width: 1px;
`