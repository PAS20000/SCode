import { useContext, useEffect } from "react"
import { ThemeContext } from "styled-components"
import useCallAction from "../../hooks/useCallAction"
import useReponsiveListener from "../../hooks/useResponsiveListener"
import Web from "../animations/Web"
import Post from "./Post"

const Allposts = () => {
const theme = useContext(ThemeContext)

const { ClassName, setClick } = useCallAction(['moreLink','moreLinkCalltoAction', 2000])
const { windowSize } = useReponsiveListener()

useEffect(() => {
   
    return () => {
        setClick(true)
    }
}, [])

    return(
        <>
            <Post
                animation={<Web width={windowSize[0] < 644 ? 300:400} height={windowSize[0] < 644 ? 300:400} Stop={false} />}
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
                classLink={ClassName}
            />
        </>
    )
}

export default Allposts