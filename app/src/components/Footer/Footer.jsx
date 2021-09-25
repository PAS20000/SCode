import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import NextImageLink from '../Contracts/NextImageLink/NextImageLink'
import { Content } from './Footer.styles'

const Footer = () => {
const theme = useContext(ThemeContext)


    return (
        <Content>
            <h3>Scode todos os direitos reservados ©️ 09/2021</h3>
            <div>
                <NextImageLink src={theme.Title === 'light' ? '/img/fL.png':'/img/fD.png'} target='_blank' width={75} height={75} href='#' alt='FaceLogo'/>
                <NextImageLink src={theme.Title === 'light' ? '/img/instaL.png':'/img/instaD.png'} target='_blank' width={75} height={75} href='#' alt='instalogo'/>
            </div>
        </Content>
    )
}

export default Footer
