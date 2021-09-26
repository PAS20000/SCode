import Head from 'next/head'

const NextHead = ({ title, description, robots }) => {
    return (
        <>
            <Head>
                <meta httpEquiv='content-type' content='text/html; charset=UTF-8'/>
                <meta httpEquiv='content-language' content='pt'/>
                <title>{title}</title>
                <meta name='application-name' content='I-robot'/>
                <meta name='description' content={description}/>
                <meta name='robots' content={robots}/>
                <meta name='author' content='PAS'/>
                <meta name='creator' content='PAS'/>
            </Head>
        </>
    )
}
export default NextHead