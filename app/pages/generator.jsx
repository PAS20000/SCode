import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form'
import NextImageLink from '../src/components/Contracts/NextImageLink/NextImageLink'
import NextHead from '../src/components/Contracts/NextHead/NextHead'
import Error from '../src/components/animations/RobotError'
import LoadRobot from '../src/components/animations/LoadRobot'
import Navbar from '../src/components/NavBar/NavBar';
import Router from 'next/router'

const Generator = ({ ChangeTheme }) => {
const { register, handleSubmit } = useForm()
const [load, setLoad] = useState(null)
const [data, setData] = useState()



useEffect(() => {
    Router.push('/')
}, [])

    async function Submit({search}) {        
        (async () => {
            try {

                setLoad(true);
                const response = await fetch(`http://localhost:3000/api/generator/${search}`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json; charset=utf-8'
                },
            });
                const data = await response.json();
                if(!data){
                    return setLoad(false)
                }
                setData(data);
                setLoad(null);
            } catch (err) {
                setLoad(false);
                console.log(err);
            }
        })();
        
       
    }
    useEffect(() => {
        const form = document.querySelector('#form')
        const button = document.querySelector('#form > button')
        const disabled = () => {
            button.setAttribute('disabled','disabled')
            setTimeout(() => {
                button.removeAttribute('disabled', 'disabled')
            }, 10000);
        }
        form.addEventListener('submit', handleSubmit(Submit))
        window.addEventListener('submit', disabled)

        return () => {
            form.removeEventListener('submit', handleSubmit(Submit))
            button.removeAttribute('disabled')
            window.removeEventListener('submit', disabled)
        }

    }, [])

    return (
        <div id='Page-Generator'>
            <NextHead 
                title='Scode portfólio | Gerador' 
                robots='all' 
                keywords='...' 
                description='...'
            />
            <header>
               <Navbar ChangeTheme={ChangeTheme}/>
            </header>
            <main>
                <section>
                    <h1>Gerador de tags, para seus vídeos</h1>
                    <form id='form'>
                        <label htmlFor="Palavras chave">Palavras chave: </label>
                        <input 
                         {...register('search')} 
                         type="search" 
                         name="search" 
                         id="search" 
                         placeholder='Digite palavra chave' />
                        <button title='gerar' type='submit'>Gerar</button>
                    </form>
                    {!!load && load === true &&
                        <div>
                            <LoadRobot width={200} height={200} Stop={false} />
                        </div>
                    }
                    {!!load && load === false &&
                        <div>
                            <Error width={200} height={200} Stop={false} />
                        </div>
                    }
                    {!!data && !!data.Generated &&
                        <div>
                            <NextImageLink 
                                href={data.Generated.href} 
                                target='_blank' 
                                src={data.Generated.thumb} 
                                width={450} height={300} alt='Thumb'
                            />
                            <h2>
                                {data.Generated.title}
                            </h2>
                            <h2>
                                Tags do vídeo: 
                            </h2>
                            <p>
                                {data.Generated.tags}
                            </p>
                            {data.Generated.transcription.length > 0 ? 
                            <h2>Transcrição (roteiro):</h2>
                            :
                            <h2>Sem transcrição</h2>}
                            <ul>
                                {data.Generated.transcription.map(word => 
                                    <li key={Math.random()}>{word}</li>
                                )}
                            </ul>
                        </div>
                    }
                </section>
                <article>
                    <h2>Article...</h2>
                    <p>
                        text...
                    </p>
                </article>
            </main>
            <footer>
                rod...
            </footer>
        </div>
    )
}

export default Generator