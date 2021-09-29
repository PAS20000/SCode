import Navbar from "../src/components/NavBar/NavBar"
import Error404 from '../src/components/animations/RobotError'
import LoadError from '../src/components/animations/ServerError'
import NextHead from "../src/components/Contracts/NextHead/NextHead"
import Footer from "../src/components/Footer/Footer"
import { useContext, useEffect } from "react"
import { ThemeContext } from "styled-components"
import NextLink from "../src/components/Contracts/NextLink/NextLink"
import useCallAction from "../src/hooks/useCallAction"

const Custom404 = ({ ChangeTheme }) => {
const theme = useContext(ThemeContext)
const {ClassName, setClick} = useCallAction(['moreLink', 'moreLinkCalltoAction', 1000])


useEffect(() => {
    return () => {
        setClick(true)
    }
}, [])


    return (
        <div id='Page-notFound'>
            <NextHead robots='noindex' title='Página não encontrada - 404'/>
            <header>
               <Navbar ChangeTheme={ChangeTheme}/>
            </header>
            <main>
                <section>
                    <h1>Página não encontrada</h1>
                    <div style={{pointerEvents:'none'}}>
                        {theme.Title === 'light' ?
                            <Error404 width={300} height={300} Stop={false} />
                            :
                            <LoadError  width={400} height={300} Stop={false} />
                        }
                    </div>
                    <NextLink href='/' target='_self' text='Ir para início' className={ClassName}/>
                </section>
            </main>
            <footer>
               <Footer/>
            </footer>
        </div>
    )
}

export default Custom404