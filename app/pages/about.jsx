import { useContext } from "react"
import { ThemeContext } from "styled-components"
import { Title } from "../src/assets/styles/Title.styles"
import EcommerceD from "../src/components/animations/EcomD"
import EcommerceL from "../src/components/animations/EcomL"
import CardService from "../src/components/CardService/CardService"
import NextHead from "../src/components/Contracts/NextHead/NextHead"
import Footer from "../src/components/Footer/Footer"
import Navbar from "../src/components/NavBar/NavBar"

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
                    <Title>Sobre nós da Scode</Title>
                    <CardService
                        animation={theme.Title === 'dark' ? <EcommerceD width={250} height={250} Stop={false}/> : <EcommerceL width={250} height={250} Stop={false}/>} 
                        title='Scode'
                        sub1='Quem somos?'
                        imageSrc1={''}
                        alt1=''
                        text1={<>
                        <p>1</p>
                        <p>2</p>
                        <p>3</p>
                        </>}
                        postName1='Redes sociais'
                        ancorText1='Scode mídias sociais'
                        sub2='O que desenvolvemos?'
                        imageSrc2={''}
                        alt2=''
                        text2={<>
                        <p>1</p>
                        <p>2</p>
                        <p>3</p>
                        </>}
                        sub3='Como desenvolvemos a solução para seu negócio?'
                        imageSrc3={''}
                        alt3=''
                        text3={<>
                        <p>1</p>
                        <p>2</p>
                        <p>3</p>
                        </>}
                        postName3=''
                        ancorText3=''
                        sub4='Por que amamos solucionar problemas digitais?'
                        imageSrc4={''}
                        alt4=''
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