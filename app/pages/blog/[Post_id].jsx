import { useRouter } from "next/router"
import { Title } from "../../src/assets/styles/Title.styles"
import NextHead from "../../src/components/Contracts/NextHead/NextHead"
import NextLink from "../../src/components/Contracts/NextLink/NextLink"
import Footer from "../../src/components/Footer/Footer"
import Navbar from "../../src/components/NavBar/NavBar"


const onePost = ({ ChangeTheme }) => {

const { query } = useRouter()

    return (
        <div id='Page-blog'>
            <NextHead 
                title='Scode postagem'
                robots='all' 
                keywords='...' 
                description='...'
            />
            <header>
                <Navbar ChangeTheme={ChangeTheme} />
            </header>
            <main>
                <section>
                    <Title>Blog Scode, informações sobre ecommerce, apps e marketing digital</Title>
                    <NextLink text='Todos os posts' href='/blog/' className='allPosts' />
                    {!!query.Post_id && query.Post_id === 'name' &&
                        <h1>Nada</h1>
                    }
                </section>
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    )
}

export default onePost