import Image from 'next/image'
import { ImgContainer } from './NextImage.styles'


export default function NextImage({src, width, height, alt, className}) {
    return (
    <ImgContainer>
        <Image src={src} width={width} height={height} alt={alt} className={className}/>
    </ImgContainer>
    )
}