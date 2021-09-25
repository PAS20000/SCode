import Banner from "../src/components/Banner/Banner"
import NextHead from "../src/components/Contracts/NextHead/NextHead"
import Navbar from "../src/components/NavBar/NavBar"
import CardService from "../src/components/CardService/CardService"
import EcommerceL from "../src/components/animations/EcomL"
import EcommerceD from "../src/components/animations/EcomD"
import AppL from "../src/components/animations/AppL"
import AppD from "../src/components/animations/AppD"
import Footer from "../src/components/Footer/Footer"
import { Title, Content } from "../src/assets/styles/Page-home.styles"
import NextImage from "../src/components/Contracts/NextImage/NextImage"
import { useContext } from "react"
import { ThemeContext } from "styled-components"
import NextLink from "../src/components/Contracts/NextLink/NextLink"


const Home = ({ ChangeTheme }) => {
const theme = useContext(ThemeContext)


  return (
    <div id='Page-Home'>
      <NextHead
        title='Scode seu e-commerce, marketing digital e aplicativos -Home'
        robots='all'
        keywords='Scode, empresarial, site, marketing digital, vendas, lucro, renda extra, renda, 
        investimento, business, loja, ecommerce, wordpress, elementor, crie seu site, 1h, site em uma hora, web, app, mobile 
        site foda, como criar um site, como ganhar dinheiro, aula, tutorial,  riether, hostgator, dominio, hospedagem, 
        Blog, lucrar, afiliados, hotmart, Empresarial, Site, 
        Vender sites, Lucros, Online, fonte de renda, programacao'
        description='Scode soluções, precisando de um site ou app ?, 
        conte com nós, nós vamos muito além da criação do seu negócio na web ou mobile.
        Proporcionamos para você, criação de soluções web, android ou IOS, marketing digital e meios de monetização.'
      />
      <header>
        <Navbar ChangeTheme={ChangeTheme} />
      </header>
      <main>
          <section>
            <Title>Scode seu e-commerce, marketing digital e aplicativo</Title>
              <Banner />
            <Content>
              <CardService
                animation={theme.Title === 'dark' ? <EcommerceD width={250} height={250} Stop={false}/> : <EcommerceL width={250} height={250} Stop={false}/>}
                title='Sua loja digital' 
                sub1='Personalização' 
                text1='Aqui seu site vai ter a cara da sua marca, sua loja será única como a física e se destacará dos demais, introduziremos seu negócio no marketing digital, na internet sua empresa alcançará muito mais pessoas, caso possua material de design gráfico podemos usá-lo, se não fazemos nós mesmos. '
                links1={''}
                moreLink1={<NextLink href='/blog/1' target='_self' text='Saiba mais' className='moreLink'/>}
                images1={''}
                sub2='Pagamento online'
                text2='Receba pagamentos online dos seus clientes, venda seus produtos, serviços ou assinaturas em um domínio próprio, garantido experência personalizada com a cara da sua empresa para seus usuários '
                links2={''}
                moreLink2={<NextLink href='/blog/2' target='_self' text='Saiba mais' className='moreLink'/>}
                images2={<>
                  <NextImage src='/img/pagamentosL.png' width={230} height={250}/>
                </>}
                sub3='Estabilidade'
                text3='Sua loja virtual pode receber milhares de acessos sem compremeter os serviços e a experêcia de seus clientes, usamos as mesmas tecnologias das empresas: '
                links3={<>
                  <a href="https://www.facebook.com/" target='_blank'> Facebook</a>,
                  <a href="https://www.pichau.com.br/" target='_blank'> PichauGamer </a> e
                  <a href="https://www.kabum.com.br/" target='_blank'> Kabum </a>
                </>}
                moreLink3={<NextLink href='/blog/3' target='_self' text='Saiba mais' className='moreLink'/>}
                images3={''}
                sub4='Segurança e sistemas'
                text4='Usamos as melhores práticas de segurança do mercado, para garantir a integridade do seu ecommerce (LGPD), podemos integrar ou criar para sua loja, sistemas de controle de estoque, fluxo de venda e muito mais. '
                links4={''}
                moreLink4={<NextLink href='/blog/4' target='_self' text='Saiba mais' className='moreLink'/>}
                images4={''}
              />
              <CardService
                animation={theme.Title === 'dark' ? <AppD width={250} height={250} Stop={false}/> : <AppL width={250} height={250} Stop={false}/>}
                title='Seu aplicativo' 
                sub1='Personalização' 
                text1='Seu aplicativo completamente planejado para suprir as necessidades da sua empresa, sejam elas internas como, gestão, controle, ou externas, vendas online via aplicativo, serviços, assinaturas. '
                links1={''}
                moreLink1={<NextLink href='/blog/5' target='_self' text='Saiba mais' className='moreLink'/>}
                images1={''}
                sub2='Multiplataforma'
                text2='Sua marca estará em todos os dispositivos, no caso de fechar um pacote completo com nós, qualquer pessoa que procurar por serviços ou produtos que você forneça, pode acabar chegando até seu site ou app, afim de comprar, assinar ou conhecer sua empresa. '
                links2={''} 
                moreLink2={<NextLink href='/blog/6' target='_self' text='Saiba mais' className='moreLink'/>}
                images2={''}
                sub3='Estabilidade'
                text3='Seu aplicativo pode receber milhares de acessos sem compremeter os serviços e a experêcia de seus clientes ou da sua empresa. '
                links3={''}
                moreLink3={<NextLink href='/blog/7' target='_self' text='Saiba mais' className='moreLink'/>}
                images3={''}
                sub4='Segurança'
                text4='Usamos as melhores práticas de segurança do mercado, para garantir a integridade (LGPD) do seu aplicativo, podemos integrar ou criar para sua loja sistemas de controle de estoque, fluxo de venda e mais. '
                links4={''}
                moreLink4={<NextLink href='/blog/8' target='_self' text='Saiba mais' className='moreLink'/>}
                images4={''}
              />
            </Content>
          </section>
      </main>
      <footer>
          <Footer/>
      </footer>
    </div>
  )
}

export default Home