import NextImageLink from '../Contracts/NextImageLink/NextImageLink'
import NextLink from '../Contracts/NextLink/NextLink'
import Light from '../animations/Light'
import Dark from '../animations/Dark'
import { useContext, useEffect, useState } from 'react'
import { ThemeContext } from 'styled-components'
import { setCookie } from 'nookies'
import { Bar, Nav, ThemeContent } from './NavBar.styles'


const Navbar = ({ ChangeTheme }) => {
const theme = useContext(ThemeContext)
const [show,setShow] = useState(false)

useEffect(() => {
    const main = document.querySelector('main')
    const contato = document.querySelector('#contato')
   
    
    !ChangeTheme && alert('Defina a propiedade ChangeTheme aonde estiver chamando a NavBar')

    
    const enter = () => setShow(true)
    const exit = () => setShow(false)

    
    contato.addEventListener('mouseenter', enter)
    contato.addEventListener('mouseleave', exit)
    contato.addEventListener('click', enter)
    main.addEventListener('click', exit)

    return () => {
        contato.removeEventListener('mouseenter', enter)
        contato.removeEventListener('mouseleave', exit)
        main.removeEventListener('click', exit)
    }
    
},[])

useEffect(() =>{
    const Theme = document.querySelector('#theme')

    const changeTheme = () => ChangeTheme(theme.Title) 
    
    setCookie(null, 'scode.theme', theme.Title, {
        maxAge:30 * 60 * 60 * 24, // 1 mês
        sameSite:'lax'
    })

    Theme.addEventListener('click', changeTheme)

    return () => {
        Theme.removeEventListener('click', changeTheme)
    }
},[theme])

    return (
        <Nav id='nav'>
            <NextImageLink href='/' src={theme.Title === 'dark' ? '/img/logoD.png':'/img/logoL.png'} width={150} height={80} alt='Logo'/>
            <NextLink href='/about/' text={<h2>Sobre</h2>}/>
            <NextLink href='/blog/' text={<h2>Blog</h2>}/>
            <div id='contato'>
                <NextLink href='#' text={<h2>Contato</h2>}/>
                {!!show &&
                    <Bar>
                        <NextLink href='#' target='_blank' text={<h4>Whatsapp</h4>}/>
                        <NextLink href='#' target='_blank' text={<h4>Instagram</h4>}/>
                    </Bar>
                }
            </div>
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