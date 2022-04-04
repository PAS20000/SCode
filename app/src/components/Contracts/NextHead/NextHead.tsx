import Head from 'next/head'

const NextHead = ({ title, description, robots, googleBot, canonical }) => {
    return (
        <>
            <Head>
                <meta httpEquiv='content-language' content='pt' key='language'/>
                <meta name='viewport' content='initial-scale=1.0, width=device-width' key='viewport'/>
                <title key='title'>{title}</title>
                {!!canonical &&
                    <link rel="canonical" href="https://mvp-portfolio.vercel.app/" key='canonical'/>
                }
                <meta property='og:type' content='website' key='website'/>
                <meta property='og:locale' content='pt_BR' key='locale'/>
                <meta property='og:url' content='https://mvp-portfolio.vercel.app/img/products.png' key='url'/>
                <meta property='og:title' content={title} key='titleog'/>
                <meta property='og:site_name' content='MVP' key='site_name'/>
                <meta property='og:description' content={description} key='descriptionog'/>
                <meta property='og:image' content='https://mvp-portfolio.vercel.app/img/products.png' key='imageog'/>
                <meta property='og:image:type' content='image/png' key='imageogpng'/>
                <meta property='og:image:width' content='400' key='imageogpngwidth'/>
                <meta property='og:image:height' content='300' key='imageogpngheight'/> 
                <meta name='application-name' content='MVP' key='appname'/>
                <meta name='description' content={description} key='description'/>
                <meta name='robots' content={robots} key='robots'/>
                {!!googleBot &&
                    <meta name='googlebot' content='index, follow' key='googlerobot'/>
                }
                <meta name='author' content='MVP-PAS' key='author'/>
                <meta name='creator' content='MVP-PAS' key='creator'/>
            </Head>
        </>
    )
}
export default NextHead