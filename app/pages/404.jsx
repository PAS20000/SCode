import Navbar from "../src/components/NavBar/NavBar"
import Error404 from '../src/components/animations/RobotError'
import LoadError from '../src/components/animations/ServerError'
import NextHead from "../src/components/Contracts/NextHead/NextHead"
import Footer from "../src/components/Footer/Footer"
import { parseCookies } from "nookies"

const Custom404 = ({ ChangeTheme }) => {

const {'scode.theme':theme} = parseCookies()

    return (
        <div id='Page-notFound'>
            <NextHead robots='noindex' title='Página não encontrada - 404'/>
            <header>
               <Navbar ChangeTheme={ChangeTheme}/>
            </header>
            <main>
                <section>
                    <div style={{pointerEvents:'none'}}>
                        {theme === 'light' ?
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