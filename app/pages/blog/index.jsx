import NextHead from "../../src/components/Contracts/NextHead/NextHead"
import Footer from "../../src/components/Footer/Footer"
import Navbar from "../../src/components/NavBar/NavBar"
import Allposts from "../../src/components/Posts"

const Blog = ({ ChangeTheme }) => {

    return (
        <div id='Page-blog'>
            <NextHead 
                title='Blog Scode, informações sobre ecommerce, apps e marketing digital' 
                robots='all' 
                keywords='blog, scode, ecommerce, marketing digital, loja virtual, vender online, aplicativos de celular' 
                description='Blog Scode, aqui você terá informações sobre, marketing digital, ecommerce, loja virtual, aplicativos de celular. 
                Nós ajudamos sua empresa ou marca a crescer, atingir e converter um público maior.'
            />
            <header>
                <Navbar ChangeTheme={ChangeTheme} />
            </header>
            <main>
                <section>
                    <h1>Blog Scode, informações sobre ecommerce, apps e marketing digital</h1>
                    <Allposts />
                </section>
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    )
}

export default Blog