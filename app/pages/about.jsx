import Footer from "../src/components/Footer/Footer"
import Navbar from "../src/components/NavBar/NavBar"

const About = ({ ChangeTheme }) => {
    return (
        <div id='Page-About'>
            <header>
               <Navbar ChangeTheme={ChangeTheme}/>
            </header>
            <main>
                <section>
                    LOGO
                    <h1>Sobre nós</h1>
                    <p>
                        text...
                    </p>
                </section>
                <article>
                    <h2>Article...</h2>
                    <p>
                        text...
                    </p>
                </article>
            </main>
            <footer>
               <Footer/>
            </footer>
        </div>
    )
}

export default About