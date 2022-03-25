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
import Background from "../src/components/Background/Background"
import H1 from "../src/components/Title/Title"


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
            <H1 text="Loja digital, aplicativo e marketing com a Scode"/>
            <Background/>
              <div>
                <CardService
                  animation={theme.Title === 'dark' ? <EcommerceD width={250} height={250} Stop={false}/> : <EcommerceL width={250} height={250} Stop={false}/>}
                  title='Seu site na web' 
                  sub1='Personalização'
                  text1={<>
                    <p>
                      Além de criarmos seu site com a cara da sua empresa, usamos estratégias de&nbsp;
                      <a href='https://rockcontent.com/br/blog/marketing-digital/' target='_blank'>
                        <strong>marketing digital</strong>
                      </a> 
                      &nbsp;para alavancar a divulgação da sua marca,
                      afinal, um website serve para isso, todos devem conhecer o seu negócio incrível.
                    </p>
                    <p>
                      Podemos usar materiais de design gráfico previamente fornecidos por vocês ou criar novos que podem também ser usados em redes socias, 
                      para assim seu site conquistar uma&nbsp;
                      <a href='https://rockcontent.com/br/blog/identidade-visual/' target='_blank'>
                        <strong>identidade visual</strong>
                      </a>, só de bater o olho as pessoas vão saber que a loja virtual é da sua marca.</p>
                    <p>
                      Fazemos temas dinâmicos para datas específicas, já entrou em algum site que muda seu visual no natal por exemplo?, 
                      o seu e-commerce também pode, além de ter os temas light e dark que disponibilizamos por padrão.
                    </p>
                  </>}
                  postName1='Sobre sites'
                  ancorText1='Saiba Mais'
                  sub2='Pagamento online'
                  text2={<>
                    <p>
                      Ultimamente as vendas online estão aumentando e dominando o mercado, você não pode perder sua fatia desse mercado também.
                    </p>
                    <p>
                      Receba&nbsp;
                      <a href='https://www.dlojavirtual.com/pagamento/conheca-8-principais-maneiras-de-receber-pagamentos-on-line/' target='_blank'>
                        <strong>pagamentos online</strong>
                      </a> via boleto, crédito, débito ou PIX dos seus clientes com segurança, credibilidade e transparência.
                    </p>
                  </>}
                  postName2=''
                  ancorText2='Saiba Mais'
                  sub3='Estabilidade'
                  text3={<>
                    <p>
                      <a href='https://auditeste.com.br/como-a-performance-do-site-impacta-nas-vendas/' target='_blank'>
                        <strong>Um site estável</strong>
                      </a> é indispensável,
                      seja para conversão de vendas no caso de uma loja virtual ou comodidade do usuário,
                      assim ficando melhor posicionado no Google, já que o mesmo gosta de sites estáveis e rápidos,
                      ninguém gosta de um site travando que não entrega seu conteúdo de forma constante.
                    </p>
                  </>}
                  postName3=''
                  ancorText3='Saiba Mais'
                  sub4='Segurança'
                  text4={<>
                    <p>
                      A segurança de sua loja digital é fundamental, já que estamos falando de um trafégo de pagamentos, 
                      onde dados de cartões de crédito, senhas, e-mails e outros dados sensíveis dos seus clientes devem
                      ser protegidos.
                    </p>
                    <p>
                      Vários negócios e lojas virtuais já sofreram&nbsp;
                      <a href='https://www.techtudo.com.br/listas/2020/12/relembre-os-oito-maiores-vazamentos-de-dados-em-2020.ghtml' target='_blank'>
                        <strong>vazamentos</strong>
                      </a> de dados e 
                      isso causa uma desconfiança enorme por parte dos clientes, que utilizam o seu e-commerce ou plataforma digital.
                    </p>
                  </>}
                  postName4=''
                  ancorText4='Saiba Mais'
                />
                <CardService
                  animation={theme.Title === 'dark' ? <AppD width={250} height={250} Stop={false}/> : <AppL width={250} height={250} Stop={false}/>}
                  title='Seu aplicativo' 
                  sub1='Modernidade'
                  text1={<>
                    <p>
                      Com o pensamento de que os celulares tomaram conta do mundo e, com isso, fez surgir diversas novas 
                      oportunidades de negócios no dia a dia, justamente por causa dos recursos que são oferecidos.
                      Hoje, é impossível classificar o aparelho celular apenas como um meio de ligação, ele é uma verdadeira parte do corpo, onde diversas 
                      informações essenciais estão presentes nele.
                    </p>
                    <p>
                      Seu negócio não pode ficar de fora do meio mobile, todos hoje em dia tem um celular e passam mais de 4 horas por dia nele, mesmo que seu aplicativo seja simples,
                      a importância de ter um é evidente.
                    </p>
                  </>}
                  postName1='aplicativo'
                  ancorText1='Saiba Mais'
                  sub2='Integração com site'
                  text2={<>
                    <p>
                      Nossos desenvolvimentos são conectados, caso peça um app e site ambos podem ser integrados, para facilitar seu gerenciamento em diversos dispositos.
                    </p>
                  </>}
                  postName2=''
                  ancorText2='Saiba Mais'
                  sub3='Google play store'
                  text3={<>
                    <p>
                      Sua solução mobile estará disponibilizada na&nbsp;
                      <a href="https://play.google.com/store?hl=pt_BR&gl=US" target='_blank'>
                        <strong>Play Store</strong>
                      </a> tanto para seus clientes, quanto para você.
                    </p>
                  </>}
                  postName3=''
                  ancorText3='Saiba Mais'
                  sub4='Apple store'
                  text4={<>
                   <p>
                      Sua solução mobile estará disponibilizada na&nbsp;
                      <a href="https://www.apple.com/br/store" target='_blank'>
                        <strong>Apple Store</strong>
                      </a> tanto para seus clientes, quanto para você.
                    </p>
                  </>}
                  postName4=''
                  ancorText4='Saiba Mais'
                />
              </div>
          </section>
      </main>
      <footer>
          <Footer/>
      </footer>
    </div>
  )
}

export default Home