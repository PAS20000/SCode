import { AnimeContent, Flex, Subtitle, Title } from "./CardService.styles"


const CardService = ({ animation, title, sub1, sub2, sub3, sub4, text1, text2, text3, text4 }) => {

    return (
        <article>
            <Flex>
                <Title>{title}</Title>
                <AnimeContent>
                    {animation}
                </AnimeContent>
            </Flex>
            <div>
                <Subtitle>{sub1}</Subtitle>
                <p>
                    {text1}
                </p>
            </div>
            <div>
                <Subtitle>{sub2}</Subtitle>
                <p>
                    {text2}
                </p>
            </div>
            <div>
                <Subtitle>{sub3}</Subtitle>
                <p>
                    {text3}
                </p>
            </div>
            <div>
                <Subtitle>{sub4}</Subtitle>
                <p>
                    {text4}
                </p>
            </div>
        </article>
    )
}

export default CardService