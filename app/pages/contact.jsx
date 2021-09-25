import { useContext } from "react"
import { ThemeContext } from "styled-components"
import NextHead from "../src/components/Contracts/NextHead/NextHead"
import NextImageLink from "../src/components/Contracts/NextImageLink/NextImageLink"
import Footer from "../src/components/Footer/Footer"
import Navbar from "../src/components/NavBar/NavBar"

const Contact = ({ ChangeTheme }) => {
const theme = useContext(ThemeContext)

    return(
        <div id='Page-Contact'>
            <NextHead title='Contato'/>
            <header>
                <Navbar ChangeTheme={ChangeTheme}/> 
            </header>
            <main>
                <section>
                    <h1>Contato</h1>
                    <NextImageLink href='#' src={theme.Title === 'light' ? '/img/instaL.png':'/img/instaD.png'} width={250} height={250} target='_blank'/>
                    <NextImageLink href='#' src={theme.Title === 'light' ? '/img/fL.png':'/img/fD.png'} width={250} height={250} target='_blank'/>
                    <NextImageLink href='#' src={theme.Title === 'light' ? '/img/.png':'/img/instaD.png'} width={250} height={250} target='_blank'/>
                </section>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default Contact