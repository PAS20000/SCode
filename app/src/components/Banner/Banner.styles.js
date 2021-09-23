import styled from "styled-components";


export const BannerContent = styled.div`

button.normal{
    border-style: solid;
    background-color: ${({theme}) => theme.colors.surface};
    opacity: 0.5;
    border-radius: 50%;
    border-style: none;
    cursor: pointer;
    padding: 5px;
    outline: none;
    margin: 10px 10px;
}button:hover{
    opacity: 1;
}
button.select{
    background-color:  ${({theme}) => theme.colors.priStrong};
    opacity: 1;
    border-radius: 50%;
    border-style: none;
    cursor: pointer;
    padding: 5px;
    outline: none;
    margin: 10px 10px;
}
#flex{
    position: absolute;
    z-index: 2;
    display: flex;
    justify-content: space-between;
}
`

export const BannerDiv = styled.div`
position: absolute;

.ghost{
   visibility: hidden;
}
.fade{
    z-index: 1;
    animation: Fade 1s;
}
`