import { useTheme } from "styled-components"
import NextImage from "../Contracts/NextImage/NextImage"
import NextLink from "../Contracts/NextLink/NextLink"
import { Title, Nav, Content, Article } from "./LinksTree.styles"

const LinkesTree = () => {
const theme = useTheme()

    return(
        <Article>
            <Content>
                <Title>
                    <NextImage src='/img/eu.webp' 
                    width={140} height={140} alt='avatar' className='circleImg'/>
                </Title>
            <Nav>
                <NextLink 
                href='/'
                text={<div><NextImage src={theme.Title === 'light' ? '/img/ScodeL.png':'/img/ScodeD.png'} width={50} height={50} 
                alt='Portfólio'/>
                <span>Portfólio</span></div>} 
                target='_blank' />
                <NextLink 
                href='https://github.com/PAS19' 
                text={<div><NextImage src='/img/github.jpg' width={50} height={50} 
                alt='Github'/>
                <span>Github</span></div>} 
                target='_blank' />
                <NextLink 
                href='https://www.instagram.com/pas__dev/' 
                text={<div><NextImage src='/img/instagram.png' width={50} height={50} 
                alt='instagram'/>
                <span>Instagram</span></div>} 
                target='_blank' />
                <NextLink 
                href='https://www.linkedin.com/in/pedro-schroeder-a45a181a4/' 
                text={<div><NextImage src='/img/linkedin.png' width={50} height={50} 
                alt='Linkedin'/>
                <span>Linkedin</span></div>}
                target='_blank' />
                <NextLink 
                href='https://discord.gg/VMuKG4sXBC' 
                text={<div><NextImage src='/img/discord.png' width={50} height={50} 
                alt='Discord'/>
                <span>Discord</span></div>}
                target='_blank'/>
            </Nav>
            </Content>
        </Article>
    )
}

export default LinkesTree