import NextImage from "../Contracts/NextImage/NextImage"

const Post = ({ title, text, src, alt, width, height }) => {
    return (
        <article>
            <NextImage src={src} width={width} height={height} alt={alt}/>
            <h2>{title}</h2>
            <p>
                {text}
            </p>
        </article>
    )
}

export default Post