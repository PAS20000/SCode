import { useRouter } from "next/router"
import { useContext } from "react"
import { ThemeContext } from "styled-components"
import { Title } from "../../src/assets/styles/Page-blog.styles"
import NextHead from "../../src/components/Contracts/NextHead/NextHead"
import NextLink from "../../src/components/Contracts/NextLink/NextLink"
import Footer from "../../src/components/Footer/Footer"
import Navbar from "../../src/components/NavBar/NavBar"
import Post from "../../src/components/Posts/Post"

const onePost = ({ ChangeTheme }) => {

const { query } = useRouter()

const theme = useContext(ThemeContext)

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
                    <Title>Blog Scode, informações sobre ecommerce, apps e marketing digital</Title>
                    <NextLink text='Todos os posts' href='/blog/' className='allPosts' />
                    {query.Post_id === '1' &&
                     <Post
                        src={theme.Title === 'light' ? '/img/loja-virtual-light.png':'/img/loja-virtual-dark.png'} width={500} height={250} 
                        alt='loja virtual profissional' className='imgPost'
                        title='Por que ter um site profissional?' 
                        text={<>
                            <p>1</p>
                            <p>2</p>
                            <p>3</p>
                        </>}
                        sub2='Por que um site é importante para uma empresa?'
                        text2={<>
                            <p>1</p>
                            <p>2</p>
                            <p>3</p>
                        </>}
                        sub3='Meu negócio é local, então por que ter um site se não vendo pela internet?'
                        text3={<>
                            <p>1</p>
                            <p>2</p>
                            <p>3</p>
                        </>}
                        ancorLink='/contact/'
                        ancorText='Quero ter um site!'
                    />
                    }
                    {query.Post_id === '2' &&
                       <Post
                       src='/img/logoD.png' width={250} height={125} alt='Logo da Scode' 
                       href='https://www.cobrefacil.com.br/blog/plataformas-pagamento-online'
                       ancorText='Sobre pagamentos online'
                       title='Facilitamos para você, foque em outras áreas da sua empresa' 
                       text='Fazer pagamentos online é um processo que pode gastar tempo, não se engane com portais de criação de sites na internet, 
                       muitas vezes eles saiem mais caros a longo prazo e tratam tudo como genérico, sem a devida precaução sobre seu modelo de negócio. 
                       Nós aqui da Scode, trabalharemos com a opção que mais favorece sua empresa, tanto financeiramente, 
                       quanto para garantir a segurança do comprador, para que você possa focar em outras áreas da sua empresa.'
                       sub2='Pagamento planejado'
                       text2='O pagamento será planejado para atender seu negócio, 
                       assim podemos garantir a melhor conversão em vendas e satisfação dos seus clientes, 
                       você receberá informações de todo o processo, podendo mudar algo ao seu gosto ou simplesmente deixar com a gente'
                       sub3='Podemos integrar com marketplaces'
                       text3='Se você já utliza algum marketplace, como por exemplo o mercado-livre, podemos integrar funcionalidades dele com seu site,
                       caso o seu modelo de negócio necessite.'
                   />
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