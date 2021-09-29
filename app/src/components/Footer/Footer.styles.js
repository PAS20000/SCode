import styled from "styled-components";


export const Content = styled.div`
background-color: ${({theme}) => theme.colors.surface};
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
padding: 10px;
margin-top: 25px;
border-top: solid;
border-width: 1px;
border-color:  ${({theme}) => theme.colors.priStrong};

h3{
    padding: 10px;
    color: ${({theme}) => theme.colors.text};
}
div{
    display: flex;
    flex-wrap: wrap;
}
`