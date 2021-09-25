import styled from 'styled-components'


export const LinkContainer = styled.div`

.defaultLink{
  color: ${({theme}) => theme.colors.pri};
  text-decoration: none;
 
}
.defaultLink:hover{
  transition: 1s;
  color: ${({theme}) => theme.colors.priStrong};
}

.moreLink{
  color: ${({theme}) => theme.colors.surface};
  padding: 10px;
  margin: 15px;
  background-color: ${({theme}) => theme.colors.pri};
  border-radius: 10px;
  text-decoration: none;
}
.moreLink:hover{
  transition: 1s;
  background-color: ${({theme}) => theme.colors.priStrong};
}

.allPosts{
  text-decoration: none;
  background-color: ${({theme}) => theme.colors.pri};
  color: ${({theme}) => theme.colors.surface};
  padding: 10px;
  border-radius: 10px;
  margin: 10px;
}
.allPosts:hover{
  transition: 0.5s;
  background-color: ${({theme}) => theme.colors.priStrong};
}
`