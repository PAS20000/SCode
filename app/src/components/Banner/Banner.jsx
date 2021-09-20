import { useContext } from "react"
import { ThemeContext } from "styled-components"
import NextImage from "../Contracts/NextImage/NextImage"



const Banner = () => {
const theme = useContext(ThemeContext)
    return (
        <div>
            <NextImage src={theme.Title === 'light' ? '/img/ScodeCardL.png':'/img/ScodeCardD.png'} 
            width={3500} height={1400} alt='Card' layout='responsive' 
            className='back' />
            <NextImage src={theme.Title === 'light' ? '/img/storeL.png':'/img/storeD.png'}
            width={3500} height={1400} alt='Store' layout='responsive' 
            className='back' />           
        </div>
    )
}

export default Banner