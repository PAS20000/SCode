import Banner from "../src/components/Banner/Banner"
import NextHead from "../src/components/Contracts/NextHead/NextHead"
import Navbar from "../src/components/NavBar/NavBar"
import CardService from "../src/components/CardService/CardService"
import EcommerceL from "../src/components/animations/EcomL"
import EcommerceD from "../src/components/animations/EcomD"
import { useContext } from "react"
import { ThemeContext } from "styled-components"
import AppL from "../src/components/animations/AppL"
import AppD from "../src/components/animations/AppD"
import Footer from "../src/components/Footer/Footer"
import { Title, Content } from "../src/assets/styles/Page-home.styles"


const Home = ({ ChangeTheme }) => {
const theme = useContext(ThemeContext)


  return (
    <div id='Page-Home'>
      <NextHead
        title='Scode soluções web, mobile e automação - Home'
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
            <Title>Nossos serviços</Title>
              <Banner />
            <Content>
              <CardService
                animation={theme.Title === 'dark' ? <EcommerceD width={250} height={250} Stop={false}/> : <EcommerceL width={250} height={250} Stop={false}/>}
                title='Sua loja digital' 
                sub1='Personalização' 
                text1='Aqui seu site vai ter a cara da sua marca, sua loja será única como a física e se destacará dos demais, introduziremos seu negócio no marketing digital, na internet sua empresa alcançará muito mais pessoas! ,caso possua material de design gráfico podemos usá-lo, se não fazemos nós mesmos!'
                sub2='Pagamento online'
                text2='Receba pagamentos online dos seus clientes, venda seus produtos, serviços ou assinaturas em um domínio próprio garantido experência personalizada para seus usuários'
                sub3='Estabilidade'
                text3='Sua loja virtual pode receber milhares de acessos sem compremeter os serviços e a experêcia de seus clientes.'
                sub4='Segurança e sistemas'
                text4='Usamos as melhores práticas de segurança do mercado, para garantir a integridade do seu ecommerce, podemos integrar a sua loja sistemas de controle de estoque, fluxo de venda e muito mais!'
              />
              <CardService
                animation={theme.Title === 'dark' ? <AppD width={250} height={250} Stop={false}/> : <AppL width={250} height={250} Stop={false}/>}
                title='Seu aplicativo' 
                sub1='Personalização' 
                text1='"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'
                sub2='Pagamento online'
                text2='"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'
                sub3='Estabilidade'
                text3='"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'
                sub4='Segurança'
                text4='"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'
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