import NextHead from "../src/components/Contracts/NextHead/NextHead"
import Footer from "../src/components/Footer/Footer"
import Navbar from "../src/components/NavBar/NavBar"
import Post from "../src/components/Posts/Post"

const Blog = ({ ChangeTheme }) => {


    return (
        <div id='Page-blog'>
            <NextHead 
                title='Scode notícias da empresa - Blog' 
                robots='all' 
                keywords='...' 
                description='...'
            />
            <header>
                <Navbar ChangeTheme={ChangeTheme} />
            </header>
            <main>
                <section>
                    <h1>Bem vindo ao Blog da Scode</h1>
                    <Post title='A importância de estar no meio Digital, para seu negócio.' text='...' src='/img/logoD.png' width={250} height={125} alt='Logo da Scode' />
                    <Post title='Post2' text='...' src='/img/logoL.png' width={250} height={125} alt='Logo da Scode' />
                </section>
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    )
}

export default Blog