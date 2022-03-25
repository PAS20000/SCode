import styled from 'styled-components'

export const Card = styled.div`
background: ${({theme}) => theme.colors.surface};
padding: 20px;
width: 50%;
height: 50%;
position: absolute;
top: 25%;
left: 25%;
border-radius: 10px;
border: solid 1px;
border-color: ${({theme}) => theme.colors.sec};
display: flex;
flex-direction: column;
form{
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    input{
        padding: 7px;
        border-radius: 10px;
        margin: 5px;
        background-color:  ${({theme}) => theme.colors.back};
        color: ${({theme}) => theme.colors.priStrong};
        border-style: none;
    }
    label{
        color: ${({theme}) => theme.colors.pri};
        padding: 5px;
    }
    button{
        text-transform: capitalize;
    }
    button:hover{
        transition: 1s;
        opacity: 0.5;
    }
    button.login{
        background: ${({theme}) => theme.colors.sec};
        padding: 10px;
        margin: 15px;
        color: ${({theme}) => theme.colors.pri};
        cursor: pointer;
        border: 1px solid ${({theme}) => theme.colors.pri};
        border-radius: 20px;
    }
    button.register{
        background: ${({theme}) => theme.colors.priStrong};
        padding: 10px;
        margin: 0px 15px;
        color: ${({theme}) => theme.colors.pri};
        cursor: pointer;
        border: 1px solid ${({theme}) => theme.colors.pri};
        border-radius: 20px;
    }
}
`