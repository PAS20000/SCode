import styled from "styled-components";

export const Nav = styled.nav`
animation: Show 1s;
display: grid;
justify-content: center;
margin-top: 10px;
a{
    text-decoration: none;
    font-size:16px;
    margin: 1px;
    div{
        background-color: ${({theme}) => theme.colors.pri};
        display: flex;
        border-radius: 10px;
        span{
            margin-top: 12px;
            padding: 5px;
            color: ${({theme}) => theme.colors.surface};
            text-transform: uppercase;
        }span:hover{
            transition: 1s;
            color: ${({theme}) => theme.colors.pri};
        }
    }div:hover{
        transition: 1s;
        background-color: ${({theme}) => theme.colors.priStrong};
        span{
            color: ${({theme}) => theme.colors.pri};
        }
    }
}
`

export const Title = styled.div`
display: grid;
justify-content: center;
flex-direction: column;
`

export const Content = styled.article`
background-color: ${({theme}) => theme.colors.surface};
padding: 65px;
display: flex;
flex-direction: column;
border-radius: 10px;
border-style: solid;
border-width: 1px;
border-color: ${({theme}) => theme.colors.priStrong};
`

export const Article = styled.article`
display: flex;
justify-content: center;
margin-top: 5px;
`