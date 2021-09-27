import { useContext } from "react"
import { ThemeContext } from "styled-components"
import EmailContact from '../src/components/animations/EmailContact'
import CardService from "../src/components/CardService/CardService"
import NextHead from "../src/components/Contracts/NextHead/NextHead"
import Footer from "../src/components/Footer/Footer"
import Navbar from "../src/components/NavBar/NavBar"
import useReponsiveListener from "../src/hooks/useResponsiveListener"


const Contact = ({ ChangeTheme }) => {
const theme = useContext(ThemeContext)
const { windowSize } = useReponsiveListener()
    return(
        <div id='Page-Contact'>
            <NextHead title='Contate-nos, para o orçamento do seu site, loja virtual ou aplicativo' robots='all' description='...'/>
            <header>
                <Navbar ChangeTheme={ChangeTheme}/> 
            </header>
            <main>
                <section>
                    <h1>Contate-nos, para o orçamento do seu site, loja virtual ou aplicativo</h1>
                    <CardService
                        animation={<EmailContact width={windowSize[0] >= 644  ? 400:300} height={250} />}
                        title='Nosso contato' 
                        text1={<>
                            <p>1</p>
                            <p>2</p>
                            <p>3</p>
                        </>}
                    />

                </section>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default Contact