import { useContext } from "react"
import { ThemeContext } from "styled-components"
import { Title } from "../../src/assets/styles/Page-blog.styles"
import NextHead from "../../src/components/Contracts/NextHead/NextHead"
import Footer from "../../src/components/Footer/Footer"
import Navbar from "../../src/components/NavBar/NavBar"
import Post from "../../src/components/Posts/Post"

const Blog = ({ ChangeTheme }) => {
const theme = useContext(ThemeContext)

    return (
        <div id='Page-blog'>
            <NextHead 
                title='Scode, informações sobre ecommerce, apps e marketing digital - Blog' 
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
                    <Title>Blog Scode, informações sobre ecommerce, apps e marketing digital</Title>
                    <Post
                        src={theme.Title === 'light' ? '/img/loja-virtual-light.png':'/img/loja-virtual-dark.png'} width={500} height={250} 
                        alt='loja virtual profissional' className='imgPost'
                        title='title 1' 
                        text={<>
                            <p>1</p>
                            <p>2</p>
                            <p>3</p>
                        </>}
                        sub2='title 2'
                        text2={<>
                            <p>1</p>
                            <p>2</p>
                            <p>3</p>
                        </>}
                        sub3='title 3'
                        text3={<>
                            <p>1</p>
                            <p>2</p>
                            <p>3</p>
                        </>}
                        ancorLink='/contact/'
                        ancorText='Quero ter um site!'
                        ancorTarget='_self'
                    />
                    {/* 9 Posts */}
                </section>
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    )
}

export default Blog