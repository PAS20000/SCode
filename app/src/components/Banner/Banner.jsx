import { useContext } from "react"
import { ThemeContext } from "styled-components"
import NextImage from "../Contracts/NextImage/NextImage"



const Banner = () => {
const theme = useContext(ThemeContext)
    return (
        <div>
            <NextImage src={theme.Title === 'light' ? '/img/ScodeCardL.png':'/img/ScodeCardD.png'} 
            width={3500} height={1400} alt='CardD' layout='responsive' 
            className={theme.Title === 'light' ? 'back':'back'}/>           
        </div>
    )
}

export default Banner