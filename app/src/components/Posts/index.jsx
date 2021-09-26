import { useContext, useEffect } from "react"
import { ThemeContext } from "styled-components"
import useCallAction from "../../hooks/useCallAction"
import Post from "./Post"

const Allposts = () => {
const theme = useContext(ThemeContext)

const { ClassName, setClick } = useCallAction(['moreLink','moreLinkCalltoAction', 2000])

useEffect(() => {
   
    return () => {
        setClick(true)
    }
}, [])

    return(
        <>
            <Post
                src={theme.Title === 'light' ? '/img/loja-virtual-light.png':'/img/loja-virtual-dark.png'} width={3500} height={1500} 
                alt='loja virtual profissional' className='imgPost'
                title='title 1' 
                text={<>
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                </>}
                sub2='title 2'
                text2={<>
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                </>}
                sub3='title 3'
                text3={<>
                    <p>1</p>                         
                    <p>2</p>
                    <p>3</p>
                </>}
                ancorLink='/contact/'
                ancorText='Quero ter um site!'
                ancorTarget='_self'
                classLink={ClassName}
            />
             <Post
                src={theme.Title === 'light' ? '/img/loja-virtual-light.png':'/img/loja-virtual-dark.png'} width={3500} height={1500} 
                alt='loja virtual profissional' className='imgPost'
                title='title 1' 
                text={<>
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                </>}
                sub2='title 2'
                text2={<>
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                </>}
                sub3='title 3'
                text3={<>
                    <p>1</p>                         
                    <p>2</p>
                    <p>3</p>
                </>}
                ancorLink='/contact/'
                ancorText='Quero ter um site!'
                ancorTarget='_self'
                classLink={ClassName}
            />
             <Post
                src={theme.Title === 'light' ? '/img/loja-virtual-light.png':'/img/loja-virtual-dark.png'} width={3500} height={1500} 
                alt='loja virtual profissional' className='imgPost'
                title='title 1' 
                text={<>
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                </>}
                sub2='title 2'
                text2={<>
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                </>}
                sub3='title 3'
                text3={<>
                    <p>1</p>                         
                    <p>2</p>
                    <p>3</p>
                </>}
                ancorLink='/contact/'
                ancorText='Quero ter um site!'
                ancorTarget='_self'
                classLink={ClassName}
            />
             <Post
                src={theme.Title === 'light' ? '/img/loja-virtual-light.png':'/img/loja-virtual-dark.png'} width={3500} height={1500} 
                alt='loja virtual profissional' className='imgPost'
                title='title 1' 
                text={<>
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                </>}
                sub2='title 2'
                text2={<>
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                </>}
                sub3='title 3'
                text3={<>
                    <p>1</p>                         
                    <p>2</p>
                    <p>3</p>
                </>}
                ancorLink='/contact/'
                ancorText='Quero ter um site!'
                ancorTarget='_self'
                classLink={ClassName}
            />
             <Post
                src={theme.Title === 'light' ? '/img/loja-virtual-light.png':'/img/loja-virtual-dark.png'} width={3500} height={1500} 
                alt='loja virtual profissional' className='imgPost'
                title='title 1' 
                text={<>
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                </>}
                sub2='title 2'
                text2={<>
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                </>}
                sub3='title 3'
                text3={<>
                    <p>1</p>                         
                    <p>2</p>
                    <p>3</p>
                </>}
                ancorLink='/contact/'
                ancorText='Quero ter um site!'
                ancorTarget='_self'
                classLink={ClassName}
            />
             <Post
                src={theme.Title === 'light' ? '/img/loja-virtual-light.png':'/img/loja-virtual-dark.png'} width={3500} height={1500} 
                alt='loja virtual profissional' className='imgPost'
                title='title 1' 
                text={<>
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                </>}
                sub2='title 2'
                text2={<>
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                </>}
                sub3='title 3'
                text3={<>
                    <p>1</p>                         
                    <p>2</p>
                    <p>3</p>
                </>}
                ancorLink='/contact/'
                ancorText='Quero ter um site!'
                ancorTarget='_self'
                classLink={ClassName}
            />
             <Post
                src={theme.Title === 'light' ? '/img/loja-virtual-light.png':'/img/loja-virtual-dark.png'} width={3500} height={1500} 
                alt='loja virtual profissional' className='imgPost'
                title='title 1' 
                text={<>
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                </>}
                sub2='title 2'
                text2={<>
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                </>}
                sub3='title 3'
                text3={<>
                    <p>1</p>                         
                    <p>2</p>
                    <p>3</p>
                </>}
                ancorLink='/contact/'
                ancorText='Quero ter um site!'
                ancorTarget='_self'
                classLink={ClassName}
            />
             <Post
                src={theme.Title === 'light' ? '/img/loja-virtual-light.png':'/img/loja-virtual-dark.png'} width={3500} height={1500} 
                alt='loja virtual profissional' className='imgPost'
                title='title 1' 
                text={<>
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                </>}
                sub2='title 2'
                text2={<>
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                </>}
                sub3='title 3'
                text3={<>
                    <p>1</p>                         
                    <p>2</p>
                    <p>3</p>
                </>}
                ancorLink='/contact/'
                ancorText='Quero ter um site!'
                ancorTarget='_self'
                classLink={ClassName}
            />
             <Post
                src={theme.Title === 'light' ? '/img/loja-virtual-light.png':'/img/loja-virtual-dark.png'} width={3500} height={1500} 
                alt='loja virtual profissional' className='imgPost'
                title='title 1' 
                text={<>
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                </>}
                sub2='title 2'
                text2={<>
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                </>}
                sub3='title 3'
                text3={<>
                    <p>1</p>                         
                    <p>2</p>
                    <p>3</p>
                </>}
                ancorLink='/contact/'
                ancorText='Quero ter um site!'
                ancorTarget='_self'
                classLink={ClassName}
            />
        </>
    )
}

export default Allposts