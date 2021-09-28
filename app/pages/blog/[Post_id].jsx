import { useRouter } from "next/router"
import NextHead from "../../src/components/Contracts/NextHead/NextHead"
import NextLink from "../../src/components/Contracts/NextLink/NextLink"
import Footer from "../../src/components/Footer/Footer"
import Navbar from "../../src/components/NavBar/NavBar"


const onePost = ({ ChangeTheme }) => {

const { query } = useRouter()

    return (
        <div id='Page-blog'>
            <NextHead 
                title='Blog Scode postagem'
                robots='all' 
                description='...'
            />
            <header>
                <Navbar ChangeTheme={ChangeTheme} />
            </header>
            <main>
                <section>
                    <h1>Blog Scode</h1>
                    <div style={{padding:'20px'}}>
                        <NextLink text='Todos os posts' href='/blog/' className='allPosts' />
                    </div>
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