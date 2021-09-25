import styled from "styled-components";

export const Content = styled.article`
font-family:Verdana, Geneva, Tahoma, sans-serif;
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
    color: white;
    padding: 10px;
    margin: 10px;
}
`