import { useRouter } from "next/router"
import { Title } from "../../src/assets/styles/Page-blog.styles"
import NextHead from "../../src/components/Contracts/NextHead/NextHead"
import NextLink from "../../src/components/Contracts/NextLink/NextLink"
import Footer from "../../src/components/Footer/Footer"
import Navbar from "../../src/components/NavBar/NavBar"


const onePost = ({ ChangeTheme }) => {

const { query } = useRouter()

    return (
        <div id='Page-blog'>
            <NextHead 
                title={`Scode Post: ${query.Post_id}`}
                robots='noindex' 
                keywords='...' 
                description='...'
            />
            <header>
                <Navbar ChangeTheme={ChangeTheme} />
            </header>
            <main>
                <section>
                    {console.log(query.Post_id), console.log(typeof(query.Post_id))}
                    <Title>Blog Scode, informações sobre ecommerce, apps e marketing digital</Title>
                    <NextLink text='Todos os posts' href='/blog/' className='allPosts' />
                    {query.Post_id === 'name'

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