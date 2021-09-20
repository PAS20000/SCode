import Banner from "../src/components/Banner/Banner"
import NextHead from "../src/components/Contracts/NextHead/NextHead"
import Navbar from "../src/components/NavBar/NavBar"


const Home = ({ ChangeTheme }) => {

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
          <article>
            <Banner />
          </article>
          <section>
              <h1>
                Nossos Serviços
              </h1>
              <p>
                text...
              </p>
          </section>
      </main>
      <footer>
        Rodapé...
      </footer>
    </div>
  )
}

export default Home