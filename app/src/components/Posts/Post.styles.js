import styled from "styled-components";

export const Content = styled.article`
@media(max-width:644px){
    padding: 10px;
}
padding: 20px;
background-color: ${({theme}) => theme.colors.surface};
border-style:solid;
margin: 20px;
border-radius: 10px;
border-color: ${({theme}) => theme.colors.sec};

h2, h3{
    color: ${({theme}) => theme.colors.sec};
    border-bottom: solid;
    border-width: 1px;
    padding: 5px;
}
p{
    color: ${({theme}) => theme.colors.text};
    padding: 10px;
    margin: 10px;
    a{
        color: ${({theme}) => theme.colors.sec};
        text-decoration: none;
    }a:hover{
        transition: 0.5s;
        text-decoration: underline;
        color: ${({theme}) => theme.colors.priStrong};
    }
}
`
export const CalltoAction = styled.div`
padding: 10px;
text-align: center;
`

export const AnimationContent = styled.div`
pointer-events: none;
`