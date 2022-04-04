import Image from 'next/image'


const NextImage = ({ src, width, height, alt, className, layout }) => {
    return (
    <div>
        <Image src={src} width={width} height={height} alt={alt} className={className} layout={layout} />
    </div>
    )
}

export default NextImage