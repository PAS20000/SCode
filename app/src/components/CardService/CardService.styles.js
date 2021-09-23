import styled from "styled-components";


export const Container = styled.article`
padding: 5px;
`

export const Text = styled.div`
    color: white;
    border-style: solid;
    border-color:${({theme}) => theme.colors.sec};
    border-radius: 5px;
    padding: 10px;
    border-width: 2px;
    background-color:  ${({theme}) => theme.colors.surface};
    p{
        padding: 10px;
    }
`

export const AnimeContent = styled.div`
pointer-events: none;
`

export const Title = styled.h2`
color: ${({theme}) => theme.colors.sec};
background-color:  ${({theme}) => theme.colors.surface};
height: 50%;
width: 100%;
margin-top: 100px;
padding: 20px;
border-radius: 10px;
border-style: solid;
border-width: 2px;
`

export const Subtitle = styled.h2`
color: ${({theme}) => theme.colors.sec};
padding: 10px;
border-bottom: solid;
border-width: 1px;
`

export const Flex = styled.div`
display: flex;
flex-wrap: wrap;
`