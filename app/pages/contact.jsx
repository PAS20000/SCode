import { useContext } from "react"
import { ThemeContext } from "styled-components"
import { Title } from "../src/assets/styles/Title.styles"
import NextHead from "../src/components/Contracts/NextHead/NextHead"
import Footer from "../src/components/Footer/Footer"
import Navbar from "../src/components/NavBar/NavBar"

const Contact = ({ ChangeTheme }) => {
const theme = useContext(ThemeContext)

    return(
        <div id='Page-Contact'>
            <NextHead title='Contate-nos, para o orçamento do seu site, loja virtual ou aplicativo' robots='all' description='...'/>
            <header>
                <Navbar ChangeTheme={ChangeTheme}/> 
            </header>
            <main>
                <section>
                    <Title>Contate-nos, para o orçamento do seu site, loja virtual ou aplicativo</Title>
                    
                </section>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default Contact