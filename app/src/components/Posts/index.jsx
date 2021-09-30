import { useContext, useEffect } from "react"
import { ThemeContext } from "styled-components"
import useCallAction from "../../hooks/useCallAction"
import useReponsiveListener from "../../hooks/useResponsiveListener"
import Post from "./Post"

const Allposts = () => {
const theme = useContext(ThemeContext)

const { ClassName, setClick } = useCallAction(['moreLink','moreLinkCalltoAction', 1200])
const { windowSize } = useReponsiveListener()

useEffect(() => {
   
    return () => {
        setClick(true)
    }
}, [])

    return(
        <>
            <Post
                src={theme.Title === 'light' ? '/img/loja-virtual-light.png':'/img/loja-virtual-dark.png'} 
                width={windowSize[0] >= 644 ? 3000:600} height={windowSize[0] >= 644 ? 1200:400}
                alt='loja virtual profissional' className='imgPost'
                title='Credibilidade para o seu negócio' 
                text={<>
                    <p> 
                        Se você já vende algo, sabe o quanto é difícil passar confiança para seus clientes, há um gasto de dinheiro e tempo muito grandes
                        na criação de uma boa estratégia para ascensão e&nbsp;
                        <a href="https://negociossc.com.br/blog/como-escolher-os-meios-de-divulgacao-ideais-para-o-seu-negocio" target='_blank'>
                            <strong>divulgação da sua loja digital na web</strong>
                        </a>.
                    </p>
                    <p>
                        No processo de criação da sua marca em uma loja física (caso você tenha uma), 
                        você montou uma&nbsp;
                        <a href='https://www.pontodesign.com.br/entenda-como-criar-uma-identidade-visual-adequada-para-sua-marca/#:~:text=%C3%89%20o%20conjunto%20de%20todos,gerado%20a%20partir%20desses%20elementos.' target='_blank'>
                            <strong>identidade visual</strong>
                        </a>
                        &nbsp;marketing, selecionou produtos, fez pesquisas de mercado. Na web não é diferente,
                        com você sendo nosso cliente todo esse processo será facilitado, sua loja virtual terá todo o suporte necessário.
                    </p>
                    <p>
                        Caso queira você mesmo criar seu site, pode utilizar um CMS (Sistema de gerenciamento de conteúdo) com eles é 
                        possível você criar seu site sem saber programação, porém nem tudo são flores.&nbsp; 
                        <a href="https://agendamahala.com/cms-definicao-vantagens-e-desvantagens" target='_blank'>
                            <strong>Saiba tudo sobre CMS.</strong>
                        </a>
                        &nbsp;Agora você pode decidir o que é melhor para sua empresa e para você.
                    </p>
                    <p>
                        Existem várias ferramentas de CMS&nbsp;
                        <a href="https://br.wordpress.org/" target='_blank'><strong>Wordpress</strong></a>,&nbsp;
                        <a href="https://magento.com/" target='_blank'><strong>Magento</strong></a> e&nbsp;
                        <a href="https://www.drupal.org/" target='_blank'><strong>Drupal</strong></a>&nbsp;.
                    </p>
                </>}
                sub2='Aumento nas vendas'
                text2={<>
                     <p>
                        Ter um site é como ter uma loja com vitrine no meio web, porém
                        não há limite de pessoas que podem acabar vendo sua loja virtual.
                        Não é preciso que seu site seja do modelo e-commerce, 
                        existem vários tipos de site que tem alto potencial de aumentar suas vendas.&nbsp;
                        <a href="https://www.pontodesign.com.br/quais-os-7-principais-tipos-de-site-e-qual-o-mais-indicado-para-o-seu-negocio/" target='_blank'>
                            <strong>Conheça os tipos de site</strong>
                        </a>.&nbsp;
                    </p>
                </>}
                ancorLink='/contact/'
                ancorText='Quero ter um site!'
                classLink={ClassName}
            />
             <Post
                src={theme.Title === 'light' ? '/img/aplicativo-light.png':'/img/aplicativo-dark.png'} 
                width={windowSize[0] >= 644 ? 3000:600} height={windowSize[0] >= 644 ? 1200:400}
                alt='aplicativo profissional' className='imgPost'
                title='Celulares estão em todo lugar' 
                text={<>
                    <p>
                        Um <a href='https://blog.fabricadeaplicativos.com.br/fabapp/7-razoes-para-criar-um-app-para-o-seu-negocio/' target='_blank'>
                            <strong>aplicativo</strong>
                        </a> para sua empresa, garante que você estará no dispositivo mais usado no mundo, o alcance do seu negócio irá aumentar
                        de forma exponencial com um app bem construído.
                    </p>
                    <p>
                        Além de ser um meio para divulgar, vender e informar, uma aplicação mobile pode também ser usada para gerenciar o seu negócio,
                        por exemplo, suponha que você seja um restaurante, o garçom precisa ir até o cliente anotar o pedido caminhar até o setor da cozinha e informa-la,
                        com um aplicativo o garçom simplesmente focaria em fazer os pedidos por meio do celular e a cozinha seria informada
                        sobre o que precisa preparar em tempo real.
                    </p>
                </>}
                sub2='Seu negócio cresce'
                text2={<>
                    <p>
                        Com um app, seus processos e gerenciamento podem ser simplificados, 
                        assim agilizando seu crescimento e atendimento para com seus clientes.
                        Conheça os&nbsp;
                        <a href="https://www.rankmyapp.com/pt-br/aso/tipos-de-aplicativos-qual-o-mais-indicado-para-seu-negocio/" target='_blank'>
                           <strong>tipos de aplicativo</strong>
                        </a>.
                    </p>
                </>}
                ancorLink='/contact/'
                ancorText='Quero ter um aplicativo!'
                classLink={ClassName}
            />
        </>
    )
}

export default Allposts