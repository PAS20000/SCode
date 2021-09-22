import { useContext, useEffect, useState } from "react"
import { ThemeContext } from "styled-components"
import NextImage from "../Contracts/NextImage/NextImage"
import { BannerContent, BannerDiv } from "./Banner.styles"



const Banner = () => {
const theme = useContext(ThemeContext)
const [show, setShow] = useState(0)

useEffect(() => {

    const Bnext = document.querySelector('#next')
    const Bback = document.querySelector('#back')

    const back = () => setShow(prev => prev > 0 ? prev - 1:prev)
    const next = () => setShow(prev => prev < 3 ? prev + 1:prev) 
    
    Bback.addEventListener('click', back)
    Bnext.addEventListener('click',next)

    return () => {
        Bback.removeEventListener('click', back)
        Bnext.removeEventListener('click', next)
        setShow(0)
    }

},[])



    return (
        <BannerContent id='banners'>
            <div id='flex'>
                <button id='back' type='button' title='Banner anterior'>{'<'}</button>
                <button id='next' type='button' title='Banner posterior'>{'>'}</button> 
            </div>
            {show <= 0 &&
            <BannerDiv>
                <NextImage src={theme.Title === 'light' ? '/img/storeL.png':'/img/storeD.png'}
                width={3500} height={1600} alt='Store' layout='responsive'
                />
            </BannerDiv>
            }
            {show === 1 &&
            <BannerDiv>
                <NextImage src={theme.Title === 'light' ? '/img/ScodeCardL.png':'/img/ScodeCardD.png'} 
                width={3500} height={1600} alt='Card' layout='responsive' 
                />
            </BannerDiv>
            }
            {show === 2 &&
            <BannerDiv>
                <NextImage src={theme.Title === 'light' ? '/img/respL.png':'/img/respD.png'}
                width={3500} height={1600} alt='Resp' layout='responsive' 
                />
            </BannerDiv>
            }
            {show >= 3 &&
             <BannerDiv>
                <NextImage src={theme.Title === 'light' ? '/img/respL2.png':'/img/respD2.png'}
                width={3500} height={1600} alt='Resp' layout='responsive' 
                />
            </BannerDiv>
            }
        </BannerContent>
    )
}

export default Banner