import Navbar from "../src/components/NavBar/NavBar"
import Error404 from '../src/components/animations/RobotError'
import LoadError from '../src/components/animations/ServerError'
import { useContext } from "react"
import { ThemeContext } from "styled-components"
import NextHead from "../src/components/Contracts/NextHead/NextHead"
import Footer from "../src/components/Footer/Footer"

const Custom404 = ({ ChangeTheme }) => {
const theme = useContext(ThemeContext)

    return (
        <div id='Page-notFound'>
            <NextHead robots='noindex' title='Página não encontrada - 404'/>
            <header>
               <Navbar ChangeTheme={ChangeTheme}/>
            </header>
            <main>
                <section>
                    <div style={{pointerEvents:'none'}}>
                        {theme.Title === 'light' ?
                            <Error404 width={300} height={300} Stop={false} />
                            :
                            <LoadError  width={400} height={300} Stop={false} />
                        }
                    </div>
                    <h1>Página não encontrada</h1>
                </section>
            </main>
            <footer>
               <Footer/>
            </footer>
        </div>
    )
}

export default Custom404