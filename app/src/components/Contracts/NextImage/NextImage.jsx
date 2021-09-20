import Image from 'next/image'
import { ImgContainer } from './NextImage.styles'


const NextImage = ({ src, width, height, alt, className, layout }) => {
    return (
    <ImgContainer>
        <Image src={src} width={width} height={height} alt={alt} className={className} layout={layout}/>
    </ImgContainer>
    )
}

export default NextImage