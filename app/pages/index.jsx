import Banner from "../src/components/Banner/Banner"
import NextHead from "../src/components/Contracts/NextHead/NextHead"
import Navbar from "../src/components/NavBar/NavBar"
import CardService from "../src/components/CardService/CardService"
import EcommerceL from "../src/components/animations/EcomL"
import EcommerceD from "../src/components/animations/EcomD"
import AppL from "../src/components/animations/AppL"
import AppD from "../src/components/animations/AppD"
import Footer from "../src/components/Footer/Footer"
import { useContext } from "react"
import { ThemeContext } from "styled-components"
import { Content } from "../src/assets/themes/Global.styles"


const Home = ({ ChangeTheme }) => {
const theme = useContext(ThemeContext)


  return (
    <div id='Page-Home'>
      <NextHead
        title='Loja virtual, app e marketing digital com a Scode '
        robots='all'
        description='Nós da Scode vamos muito além da criação do seu negócio na web ou mobile. 
        Criação de lojas virtuais(E-commerce), aplicativos Android ou IOS, marketing digital e meios de monetização.'
        googleBot={true}
      />
      <header>
        <Navbar ChangeTheme={ChangeTheme} />
      </header>
      <main>
          <section>
            <h1>Loja digital, aplicativo e marketing com a Scode</h1>
              <Banner />
              <Content>
                <CardService
                  animation={theme.Title === 'dark' ? <EcommerceD width={250} height={250} Stop={false}/> : <EcommerceL width={250} height={250} Stop={false}/>}
                  title='Ecommerce' 
                  sub1='Personalização'
                  text1={<>
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                  </>}
                  postName1='name'
                  ancorText1='Saiba Mais'
                  sub2='Pagamento online'
                  text2={<>
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                  </>}
                  postName2='name'
                  ancorText2='Saiba Mais'
                  sub3='Estabilidade'
                  text3={<>
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                  </>}
                  postName3='name'
                  ancorText3='Saiba Mais'
                  sub4='Segurança'
                  text4={<>
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                  </>}
                  postName4='name'
                  ancorText4='Saiba Mais'
                />
                <CardService
                  animation={theme.Title === 'dark' ? <AppD width={250} height={250} Stop={false}/> : <AppL width={250} height={250} Stop={false}/>}
                  title='Seu aplicativo' 
                  sub1='Modernidade'
                  text1={<>
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                  </>}
                  postName1='name'
                  ancorText1='Saiba Mais'
                  sub2='Integração com site'
                  text2={<>
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                  </>}
                  postName2='name'
                  ancorText2='Saiba Mais'
                  sub3='Google play store'
                  text3={<>
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                  </>}
                  postName3='name'
                  ancorText3='Saiba Mais'
                  sub4='Apple store'
                  text4={<>
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                  </>}
                  postName4='name'
                  ancorText4='Saiba Mais'
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