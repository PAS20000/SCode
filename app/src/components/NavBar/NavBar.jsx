import NextImageLink from '../Contracts/NextImageLink/NextImageLink'
import NextLink from '../Contracts/NextLink/NextLink'
import Light from '../animations/Light'
import Dark from '../animations/Dark'
import { useContext, useEffect, useState } from 'react'
import { ThemeContext } from 'styled-components'
import { setCookie,  } from 'nookies'
import { Nav, ThemeContent } from './NavBar.styles'


const Navbar = ({ ChangeTheme }) => {
const theme = useContext(ThemeContext)
const [show,setShow] = useState(false)

useEffect(() => {
    
    !ChangeTheme && alert('Defina a propiedade ChangeTheme aonde estiver chamando a NavBar')
   
},[])

useEffect(() =>{
    const Theme = document.querySelector('#theme')

    const changeTheme =  () => {
        ChangeTheme(theme.Title)

        setCookie(null, 'scode.theme', theme.Title === 'dark' ? 'light':'dark', {
            maxAge:1 * 60 * 60 * 24,
            sameSite:'lax',
            path:'/'
          })
    }

    Theme.addEventListener('click', changeTheme)

    return () => {
        Theme.removeEventListener('click', changeTheme)
    }

},[theme])

    return (
        <Nav id='nav'>
            <NextImageLink href='/' src={theme.Title === 'dark' ? '/img/logoD.png':'/img/logoL.png'} width={150} height={80} alt='Logo'/>
            <NextLink href='/about/' text={<h2>Sobre</h2>} className='defaultLink'/>
            <NextLink href='/blog/' text={<h2>Blog</h2>} className='defaultLink'/>
            <NextLink href='/contact/' text={<h2>Contato</h2>} className='defaultLink'/>
            <div id='theme'>
            {theme.Title === 'dark' ?
                <ThemeContent>
                    <Light width={50} height={50} Stop={false}/>
                </ThemeContent>
                :
                <ThemeContent>
                    <Dark width={50} height={50} Stop={false}/>
                </ThemeContent>
            }
           </div>
        </Nav>
    )
}

export default Navbar