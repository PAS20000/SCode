import NextImage from "../Contracts/NextImage/NextImage"
import NextLink from "../Contracts/NextLink/NextLink"
import { CalltoAction, Content, AnimationContent } from "./Post.styles"

const Post = ({ title, text, text2, text3, sub2, sub3, src, alt, width, height, className, ancorText, ancorLink, ancorTarget, classLink, animation }) => {

    return (
        <Content>
            {!animation ?
                <NextImage src={src} width={width} height={height} alt={alt} className={className}/>
                :
                <AnimationContent>
                    {animation}
                </AnimationContent>
            }
            <h2>{title}</h2>
            {text}
            <h3>{sub2}</h3>
            {text2}
            <h3>{sub3}</h3>
            {text3}
            <CalltoAction>
                <NextLink href={ancorLink} target={ancorTarget} text={ancorText} className={classLink}/>
            </CalltoAction>
        </Content>
    )
}

export default Post