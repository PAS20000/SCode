import { AnimeContent, Container, Flex, Subtitle, Title, Text } from "./CardService.styles"


const CardService = ({ animation, title, sub1, sub2, sub3, sub4, text1, text2, text3, text4 }) => {

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
                <p>
                    {text1}
                </p>
           
                <Subtitle>{sub2}</Subtitle>
                <p>
                    {text2}
                </p>
            
                
                <Subtitle>{sub3}</Subtitle>
                <p>
                    {text3}
                </p>
                
                
                <Subtitle>{sub4}</Subtitle>
                <p>
                    {text4}
                </p>
                
            </Text>
        </Container>
    )
}

export default CardService