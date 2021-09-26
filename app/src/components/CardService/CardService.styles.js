import styled from "styled-components";


export const Container = styled.article`
padding: 5px;
`

export const Text = styled.div`
    border-style: solid;
    border-color:${({theme}) => theme.colors.sec};
    border-radius: 5px;
    padding: 20px;
    border-width: 2px;
    background-color:  ${({theme}) => theme.colors.surface};
    p{
        color: white;
        padding: 10px;
        margin: 10px;
        a{
            text-decoration: none;
            color: ${({theme}) => theme.colors.sec};
        }a:hover{
            transition: 0.5s;
            color: ${({theme}) => theme.colors.priStrong};
        }
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

export const ImgContent = styled.div`
padding: 20px;
margin-bottom:10px;
`

export const CalltoAction = styled.div`
padding: 10px;
`