import styled from 'styled-components'

// This creates a custom component that wraps an <a> tag
export const Ancor = styled.a`
  color: ${({theme}) => theme.colors.pri};
  text-decoration: none;
  &&:hover{
    transition: 1s;
    color: ${({theme}) => theme.colors.priStrong};
  }
`

export const LinkContainer = styled.div`
background-color: ${({theme}) => theme.colors.surface};
`