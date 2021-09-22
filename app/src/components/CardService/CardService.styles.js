import styled from "styled-components";

export const AnimeContent = styled.div`
pointer-events: none;
`

export const Title = styled.h2`
color: ${({theme}) => theme.colors.pri};
background-color:  ${({theme}) => theme.colors.surface};
height: 50%;
width: 100%;
margin-top: 100px;
padding: 20px;
border-radius: 10px;
border-style: solid;
`

export const Subtitle = styled.h2`
color: ${({theme}) => theme.colors.pri};
`

export const Flex = styled.div`
display: flex;
flex-wrap: wrap;
`