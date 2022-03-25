import NextImageLink from '../Contracts/NextImageLink/NextImageLink'
import NextLink from '../Contracts/NextLink/NextLink'
import Light from '../animations/Light'
import Dark from '../animations/Dark'
import useResponsiveListener from '../../hooks/useResponsiveListener'
import { useContext, useEffect } from 'react'
import { ThemeContext } from 'styled-components'
import { setCookie,  } from 'nookies'
import { Nav, ThemeContent } from './NavBar.styles'


const Navbar = ({ ChangeTheme }) => {
const theme = useContext(ThemeContext)
const { windowSize } = useResponsiveListener()


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
            {windowSize[0] >= 644 ?
                <NextImageLink href='/' src={theme.Title === 'light' ? '/img/logoL.png':'/img/logoD.png'}
                width={windowSize[0] >= 644 ? 150:100} height={windowSize[0] >= 644 ? 80:50} alt='Logo' />
                :
                <NextImageLink href='/' src={theme.Title === 'light' ? '/img/ScodeL.png':'/img/ScodeD.png'}
                width={60} height={50} alt='Logo' />
            }
            <NextLink href='/about/' text={<h2>Sobre</h2>} className='defaultLink'/>
            <NextLink href='/blog/' text={<h2>Blog</h2>} className='defaultLink'/>
            <NextLink href='/dashboard/' text={<h2>Dashboard</h2>} className='defaultLink'/>
            <div id='theme'>
            {theme.Title === 'dark' ?
                <ThemeContent>
                    <Light width={windowSize[0] >= 644 ? 50:30} height={windowSize[0] >= 644 ? 50:30} Stop={false}/>
                </ThemeContent>
                :
                <ThemeContent>
                    <Dark width={windowSize[0] >= 644 ? 50:30} height={windowSize[0] >= 644 ? 50:30} Stop={false}/>
                </ThemeContent>
            }
           </div>
        </Nav>
    )
}

export default Navbar