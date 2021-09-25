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
                        src={theme.Title === 'light' ? '/img/StoreL.png':'/img/StoreD.png'} width={500} height={250} 
                        alt='Site pro' className='imgPost'  
                        href='https://www.agenciamacan.com.br/blog/a-importancia-de-ter-um-site-profissional#:~:text=Um%20site%20tamb%C3%A9m%20%C3%A9%20importante,no%20mercado%20e%20sem%20credibilidade.'
                        ancorText='Mais detalhes sobre ter um site'
                        title='Por que ter um site profissional?' 
                        text='Há muito que conscientizar sobre essa necessidade fundamental para o sucesso dos negócios.
                        Uma das coisas que mais chama atenção em uma empresa, seja ela pequena, média ou grande. E você pode até pensar que, hoje em dia, 
                        todo mundo sabe o quanto isso é importante para as empresas, mas, infelizmente, isso não é verdade. 
                        Há muito que conscientizar sobre essa necessidade fundamental para o sucesso dos negócios. 
                        Qualquer empresa que não tem um site profissional está perdendo uma das mais poderosas ferramentas de marketing disponíveis no mercado.'
                        sub2='Por que um site é importante para uma empresa?'
                        text2='A principal razão de ter um site é que as pessoas são mais susceptíveis de encontrar uma empresa que tem uma presença na web. 
                        Hoje, a maioria das pessoas pesquisam produtos e serviços online antes de fazer uma compra, e se você não tem um site, 
                        você está perdendo todo esse potencial de negócio. 
                        Mesmo que as pessoas não comprem o seu produto online, elas vão pelo menos pesquisá-lo online para depois irem até o seu local físico, ou, 
                        quem sabe, comprar futuramente. As possibilidades são inúmeras, e você não pode ignorá-las.'
                        sub3='Meu negócio é local, então por que ter um site se não vendo pela internet?'
                        text3='É correto afirmar que fazer vendas é uma das possibilidades que sua empresa ganha ao ter um site. 
                        Da mesma forma, é incorreto afirmar que um site só serve para essa finalidade. Caso isso fosse verdadeiro, 
                        todas as páginas da internet teriam como propósito comercializar produtos ou serviços. Porém, sabemos que não é isso que acontece.'
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