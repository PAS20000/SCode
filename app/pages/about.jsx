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
                            <p>1</p>
                            <p>2</p>
                            <p>3</p>
                        </>}
                        sub2='O que desenvolvemos?'
                        text2={<>
                            <p>1</p>
                            <p>2</p>
                            <p>3</p>
                        </>}
                        sub3='soluções para seu negócio'
                        text3={<>
                            <p>1</p>
                            <p>2</p>
                            <p>3</p>
                        </>}
                        sub4='Scode nas mídias socias'
                        text4={<>
                            <p>1</p>
                            <p>2</p>
                            <p>3</p>
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