import Head from 'next/head'

const NextHead = ({ title, description, robots, googleBot }) => {
    return (
        <>
            <Head>
                <meta httpEquiv='content-language' content='pt'/>
                <meta name='viewport' content='initial-scale=1.0, width=device-width' />
                <title>{title}</title>
                <meta property='og:type' content='website'/>
                <meta property='og:locale' content='pt_BR' />
                <meta property='og:url' content='https://www.meusite.com.br/ola-mundo' />
                <meta property='og:title' content={title}/>
                <meta property='og:site_name' content='Scode'/>
                <meta property='og:description' content={description}/>
                <meta property='og:image' content='www.meusite.com.br/img/loja-virtual-dark.png' />
                <meta property='og:image:type' content='image/png'/>
                <meta property='og:image:width' content='800'/>
                <meta property='og:image:height' content='600'/> 
                <meta name='application-name' content='Scode'/>
                <meta name='description' content={description}/>
                <meta name='robots' content={robots}/>
                {!!googleBot &&
                    <meta name='googlebot' content='index, follow' />
                }
                <meta name='author' content='PAS'/>
                <meta name='creator' content='PAS'/>
            </Head>
        </>
    )
}
export default NextHead