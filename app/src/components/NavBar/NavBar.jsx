import NextImageLink from '../Contracts/NextImageLink/NextImageLink'
import NextLink from '../Contracts/NextLink/NextLink'
import Light from '../animations/Light'
import Dark from '../animations/Dark'
import { useContext, useEffect, useState } from 'react'
import { ThemeContext } from 'styled-components'



const Navbar = ({ ChangeTheme }) => {
const theme = useContext(ThemeContext)
const [show,setShow] = useState(false)

useEffect(() => {
    const main = document.querySelector('main')
    const contato = document.querySelector('#contato')

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

    return (
        <nav id='nav'>
            <NextImageLink href='/' src='/favicon.ico' width={50} height={50} alt='Logo'/>
            <NextLink href='/about/' text='Sobre'/>
            <div id='contato'>
                <NextLink href='#' text='Contato'/>
                {!!show &&
                    <nav>
                        <NextLink href='#' target='_blank' text={<span>Icon whats</span>}/>
                        <NextLink href='#' target='_blank' text={<span>Icon insta</span>}/>
                        <NextLink href='#' target='_blank' text={<span>Icon message</span>}/>
                    </nav>
                }
            </div>
            {theme.Title === 'dark' ?
                <div>
                    <Light width={50} height={50} Stop={false}/>
                </div>
                :
                <div>
                    <Dark width={50} height={50} Stop={false}/>
                </div>
            }
           
        </nav>
    )
}

export default Navbar