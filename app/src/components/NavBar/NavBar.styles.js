import styled from "styled-components"

export const Nav = styled.nav`
@media(max-width: 644px) {
    h2{
        font-size: 16px;
    }
}

display: flex;
flex-wrap: wrap;
justify-content: space-between;
background-color: ${({ theme }) => theme.colors.surface};
border-bottom: solid;
border-width:1px;
border-color: ${({ theme }) => theme.colors.priStrong};
h2{
    margin-top: 15px;
    padding: 10px;
}
#theme{
    margin-top:10px;
    cursor: pointer;
    padding:5px;
}

`

export const Bar = styled.nav`
text-align: center;
position: absolute;
background-color:  ${({ theme }) => theme.colors.surface};
padding: 15px;
border-radius: 0px 0px 10px 10px;
border-style: solid;
border-color:  ${({ theme }) => theme.colors.pri};
border-width:1px;
`

export const ThemeContent = styled.div`
@media(max-width: 644px){
    margin-top: 3px;
}
pointer-events: none;
`