import { AnimeContent, Container, Flex, Subtitle, Title, Text, ImgContent } from "./CardService.styles"


const CardService = ({
    animation, title, sub1, sub2, sub3, sub4, 
    text1, text2, text3, text4, 
    images1, images2, images3, images4, 
    moreLink1, moreLink2, moreLink3, moreLink4 

}) => {

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
                {moreLink1}
                <Subtitle>{sub2}</Subtitle>
                {text2}
                <ImgContent>
                    {images2}
                </ImgContent>
                {moreLink2}
                <Subtitle>{sub3}</Subtitle>
                {text3}
                <ImgContent>
                    {images3}
                </ImgContent>
                {moreLink3}
                <Subtitle>{sub4}</Subtitle>
                {text4}
                <ImgContent>
                    {images4}
                </ImgContent>
                {moreLink4}
            </Text>
        </Container>
    )
}

export default CardService