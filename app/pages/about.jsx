import CardService from "../src/components/CardService/CardService"
import NextHead from "../src/components/Contracts/NextHead/NextHead"
import Footer from "../src/components/Footer/Footer"
import Navbar from "../src/components/NavBar/NavBar"
import AboutD from '../src/components/animations/AboutL'
import AboutLight from '../src/components/animations/About-light'
import { useContext } from "react"
import { ThemeContext } from "styled-components"

const About = ({ ChangeTheme }) => {
const theme = useContext(ThemeContext)

    return (
        <div id='Page-About'>
            <NextHead title='Sobre nós da Scode' robots='all' description='...'/>
            <header>
               <Navbar ChangeTheme={ChangeTheme}/>
            </header>
            <main>
                <section>
                    <h1>Sobre nós da Scode</h1>
                    <CardService
                        animation={theme.Title === 'light' ? <AboutLight width={250} height={250} Stop={false}/>:<AboutD width={250} height={250} Stop={false}/>}
                        title='Scode' 
                        sub1='Quem somos?'
                        text1={<>
                            <p>
                                Já pensou você ter uma agência digital, empresa de desenvolvimento de software e infraestrutura de
                                TI em um só lugar? Assim é a Scode.
                            </p>
                            <p>
                                Buscamos, ser ágeis acima de tudo,
                                um lugar de constante desenvolvimento onde nosso time possa desafiar-se para crescer profissionalmente, 
                                não apenas em suas áreas de especialização mas em todas as outras que os cercam.
                                Buscamos exceder expectativas com qualidade no que se é desenvolvido ou criado
                            </p>
                        </>}
                        sub2='O que desenvolvemos?'
                        text2={<>
                            <p>
                                Desenvolvemos, hospedamos e realizamos o Marketing Digital de seu negócio ou ideia, 
                                além de criar aplicativos e sites com gerenciamento para seu negócio.
                            </p>
                        </>}
                        sub3='Soluções para seu negócio'
                        text3={<>
                            <p>
                                Aplicativos para android e IOS, queremos que sua marca esteja em todos os dispositivos possíveis e facilitamos todo o processo para que isso seja possível.
                            </p>
                        </>}
                        sub4='Scode nas mídias socias'
                        text4={<>
                            <p>
                                <a href="#" target='_blank'>
                                    <strong>Siga-nos no Instagram</strong>
                                </a>
                            </p>
                            <p>
                                <a href="#" target='_blank'>
                                    <strong>Siga-nos no Facebook</strong>
                                </a>
                            </p>
                            <p>
                                <a href="#" target='_blank'>
                                    <strong>Mande uma mensagem no Whatsapp</strong>
                                </a>
                            </p>
                        </>}
                    />
                </section>
            </main>
            <footer>
               <Footer/>
            </footer>
        </div>
    )
}

export default About