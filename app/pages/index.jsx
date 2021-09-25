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
                sub1='sub1'
                images1={''}
                text1={<>
                  <p>1</p>
                  <p>2</p>
                  <p>3</p>
                </>}
                moreLink1={<NextLink href='/blog/1/' target='_self' text='Saiba mais' className='moreLink'/>}
                sub2='sub2'
                images2={''}
                text2={<>
                  <p>1</p>
                  <p>2</p>
                  <p>3</p>
                </>}
                moreLink2={<NextLink href='/blog/2/' target='_self' text='Saiba mais' className='moreLink'/>}
                sub3='sub3'
                text3={<>
                  <p>1</p>
                  <p>2</p>
                  <p>3</p>
                </>}
                moreLink3={<NextLink href='/blog/3/' target='_self' text='Saiba mais' className='moreLink'/>}
                sub4='sub4'
                images4={''}
                text4={<>
                  <p>1</p>
                  <p>2</p>
                  <p>3</p>
                </>}
                 moreLink4={<NextLink href='/blog/4/' target='_self' text='Saiba mais' className='moreLink'/>}
              />
              <CardService
                animation={theme.Title === 'dark' ? <AppD width={250} height={250} Stop={false}/> : <AppL width={250} height={250} Stop={false}/>}
                title='Seu aplicativo' 
                sub1='sub1'
                images1={''}
                text1={<>
                  <p>1</p>
                  <p>2</p>
                  <p>3</p>
                </>}
                moreLink1={<NextLink href='/blog/5/' target='_self' text='Saiba mais' className='moreLink'/>}
                sub2='sub2'
                images2={''}
                text2={<>
                  <p>1</p>
                  <p>2</p>
                  <p>3</p>
                </>}
                moreLink2={<NextLink href='/blog/6/' target='_self' text='Saiba mais' className='moreLink'/>}
                sub3='sub3'
                images3={''}
                text3={<>
                  <p>1</p>
                  <p>2</p>
                  <p>3</p>
                </>}
                moreLink3={<NextLink href='/blog/7/' target='_self' text='Saiba mais' className='moreLink'/>}
                sub4='sub4'
                images4={''}
                text4={<>
                  <p>1</p>
                  <p>2</p>
                  <p>3</p>
                </>}
                 moreLink4={<NextLink href='/blog/8/' target='_self' text='Saiba mais' className='moreLink'/>}
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