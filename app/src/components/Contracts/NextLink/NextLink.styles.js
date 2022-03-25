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
  padding: 10px;
  margin: 15px;
  border-radius: 10px;
  text-decoration: none;
  color: ${({theme}) => theme.colors.text};
  transition: 1s;
  background-color: ${({theme}) => theme.colors.priStrong};

}
.moreLink:hover{
  color: white;
  transition: 1s;
  background-color: ${({theme}) => theme.colors.successStrong};
}
.moreLinkCalltoAction{
  color: white;
  padding: 10px;
  margin: 15px;
  border-radius: 10px;
  text-decoration: none;
  transition: 1s;
  background-color: ${({theme}) => theme.colors.successStrong};
}

.allPosts{
  text-decoration: none;
  background-color: ${({theme}) => theme.colors.surface};
  color: ${({theme}) => theme.colors.text};
  padding: 10px;
  border-radius: 10px;
  margin: 10px;
}
.allPosts:hover{
  transition: 0.5s;
  background-color: ${({theme}) => theme.colors.priStrong};
}
`