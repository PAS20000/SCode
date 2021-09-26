import { useEffect } from "react"
import useCallAction from "../../hooks/useCallAction"
import NextLink from "../Contracts/NextLink/NextLink"
import { AnimeContent, Container, Flex, Subtitle, Title, Text, ImgContent, CalltoAction } from "./CardService.styles"


const CardService = ({
    animation, title, sub1, sub2, sub3, sub4, 
    text1, text2, text3, text4, 
    images1, images2, images3, images4, 
    postName1, postName2, postName3, postName4

}) => {

const { ClassName, setClick } = useCallAction(['moreLink','moreLinkCalltoAction',2000,])

useEffect(() => {
    return () => {
        setClick(false)
    }
}, [])
    return (
        <Container>
            <Flex>
                <Title>{title}</Title>
                <AnimeContent>
                    {animation}
                </AnimeContent>
            </Flex>
            <Text>
                <Subtitle>{sub1}</Subtitle>
                {text1}
                <ImgContent>
                    {images1}
                </ImgContent>
                <CalltoAction>
                    <NextLink href={`/blog/${postName1}/`} target='_self' text='Saiba mais' className={ClassName}/>
                </CalltoAction>
                <Subtitle>{sub2}</Subtitle>
                {text2}
                <ImgContent>
                    {images2}
                </ImgContent>
                <CalltoAction>
                    <NextLink href={`/blog/${postName2}/`} target='_self' text='Saiba mais' className={ClassName}/>
                </CalltoAction>
                <Subtitle>{sub3}</Subtitle>
                {text3}
                <ImgContent>
                    {images3}
                </ImgContent>
                <CalltoAction>
                    <NextLink href={`/blog/${postName3}/`} target='_self' text='Saiba mais' className={ClassName}/>
                </CalltoAction>
                <Subtitle>{sub4}</Subtitle>
                {text4}
                <ImgContent>
                    {images4}
                </ImgContent>
                <CalltoAction>
                    <NextLink href={`/blog/${postName4}/`} target='_self' text='Saiba mais' className={ClassName}/>
                </CalltoAction>
            </Text>
        </Container>
    )
}

export default CardService