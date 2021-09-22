import styled from "styled-components";


export const BannerContent = styled.div`
button{
    color: ${({theme}) => theme.colors.priStrong};
    font-size: 50px;
    background-color: transparent;
    opacity: 0.5;
    border-radius: 10px;
    border-style: none;
    cursor: pointer;
    padding: 5px;
    outline: none;
}button:hover{
    opacity: 1;
}
#flex{
    position: absolute;
    z-index: 1;
    display: flex;
    justify-content: space-between;
    width: 100%;
    min-height: 200px;
}
`

export const BannerDiv = styled.div`
animation: Show 1s;
`