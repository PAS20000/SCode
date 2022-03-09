import useReponsiveListener from "../../hooks/useResponsiveListener"
import NextImage from "../Contracts/NextImage/NextImage"
import { useContext } from "react"
import { ThemeContext } from "styled-components"

const Background = () => {
const theme = useContext(ThemeContext)
const { windowSize } = useReponsiveListener()

    return(
        <div>
            <NextImage src={theme.Title === 'light' ? '/img/site-responsivo2-light.png':'/img/site-responsivo2-dark.png'}
                width={windowSize[0] >= 644 ? 3500:2000} height={windowSize[0] >= 644 ? 1400:1200} alt='loja virtual' layout='intrinsic'
                className='fade'
            />
        </div>
    )
}

export default Background