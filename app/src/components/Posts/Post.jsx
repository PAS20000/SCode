import NextImage from "../Contracts/NextImage/NextImage"
import NextLink from "../Contracts/NextLink/NextLink"
import { Content } from "./Post.styles"

const Post = ({ title, text, text2, text3, sub2, sub3, src, alt, width, height, href, ancorText, className }) => {
    return (
        <Content>
            <NextImage src={src} width={width} height={height} alt={alt} className={className}/>
            <h2>{title}</h2>
            <p>
                {text}
            </p>
            <h3>{sub2}</h3>
            <p>
                {text2}
            </p>
            <h3>{sub3}</h3>
            <p>
                {text3}
            </p>
            <NextLink href={href} target='_blank' text={ancorText} className='moreLink'/>
        </Content>
    )
}

export default Post