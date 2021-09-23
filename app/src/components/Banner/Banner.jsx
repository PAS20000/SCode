import { useContext, useEffect, useState } from "react"
import { ThemeContext } from "styled-components"
import NextImage from "../Contracts/NextImage/NextImage"
import { BannerContent, BannerDiv } from "./Banner.styles"

const Banner = () => {
const theme = useContext(ThemeContext)
const [show, setShow] = useState(['default',0])

useEffect(() => {

    const img0 = document.querySelector('#img0')
    const img1 = document.querySelector('#img1')
    const img2 = document.querySelector('#img2')
    const img3 = document.querySelector('#img3')

    const show0 = () =>  setShow(['click',0])
    const show1 = () =>  setShow(['click',1])
    const show2 = () =>  setShow(['click',2])
    const show3 = () =>  setShow(['click',3])
    
    img0.addEventListener('click', show0)
    img1.addEventListener('click',show1)
    img2.addEventListener('click',show2)
    img3.addEventListener('click',show3)

    return () => {
        img0.removeEventListener('click', show0)
        img1.removeEventListener('click', show1)
        img2.removeEventListener('click', show2)
        img3.removeEventListener('click', show3)
        setShow(['default', 0])
    }

},[])

useEffect(() => {

        const slideTime = () => 
                setTimeout(() => {
                    setShow(prev => [prev[0], prev[1] + 1])
                }, 5000);

        if(show[0] != 'click') {
            show[1] > 3 ? setShow(['default', 0]):slideTime()
        }

} , [show])

    return (
        <BannerContent id='banners'>
                <div id='flex'>
                    <button id='img0' type='button' title='Banner anterior'  className={show[1] === 0 || show[1] > 3 ? 'select':'normal'}></button>
                    <button id='img1' type='button' title='Banner posterior' className={show[1] === 1 ? 'select':'normal'}></button> 
                    <button id='img2' type='button' title='Banner posterior' className={show[1]=== 2 ? 'select':'normal'}></button> 
                    <button id='img3' type='button' title='Banner posterior' className={show[1]=== 3 ? 'select':'normal'}></button> 
                </div>
                    <BannerDiv>
                    <NextImage src={theme.Title === 'light' ? '/img/storeL.png':'/img/storeD.png'}
                        width={3500} height={1600} alt='Store' layout='intrinsic'className={show[1] === 0 || show[1] > 3 ? 'fade':'ghost'}
                    />
                    </BannerDiv>
                    <BannerDiv>
                    <NextImage src={theme.Title === 'light' ? '/img/ScodeCardL.png':'/img/ScodeCardD.png'} 
                        width={3500} height={1600} alt='Card' layout='intrinsic' className={show[1] === 1 ? 'fade':'ghost'}
                    />
                     </BannerDiv>
                    <BannerDiv>
                    <NextImage src={theme.Title === 'light' ? '/img/respL.png':'/img/respD.png'}
                        width={3500} height={1600} alt='Resp' layout='intrinsic' className={show[1] === 2 ? 'fade':'ghost'}
                    />
                    </BannerDiv>
                    <BannerDiv>
                    <NextImage src={theme.Title === 'light' ? '/img/respL2.png':'/img/respD2.png'}
                        width={3500} height={1600} alt='Resp' layout='intrinsic' className={show[1] === 3 ? 'fade':'ghost'}
                    />
                    </BannerDiv>
                
        </BannerContent>
    )
}

export default Banner