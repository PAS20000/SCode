import { useEffect } from "react"
import useCallAction from "../../hooks/useCallAction"
import NextImage from "../Contracts/NextImage/NextImage"
import NextLink from "../Contracts/NextLink/NextLink"
import { AnimeContent, Container, Flex, Subtitle, Title, Text, ImgContent, CalltoAction } from "./CardService.styles"


const CardService = ({
    animation, title, sub1, sub2, sub3, sub4, 
    text1, text2, text3, text4, 
    imageSrc1, imageSrc2, imageSrc3, imageSrc4,
    alt1, alt2, alt3, alt4,
    postName1, postName2, postName3, postName4,
    ancorText1, ancorText2, ancorText3, ancorText4,

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
                {!!title &&
                    <Title>{title}</Title>
                }
                <AnimeContent>
                    {animation}
                </AnimeContent>
            </Flex>
            <Text>
                {!!sub1 &&
                    <Subtitle>{sub1}</Subtitle>
                }
                {text1}
                {!!imageSrc1 &&
                <ImgContent>
                    <NextImage src={imageSrc1} width={1500} height={1500} alt={alt1} className='imgPost' />
                </ImgContent>
                }
                {postName1 &&
                <CalltoAction>
                    <NextLink href={`/blog/${postName1}/`} target='_self' text={ancorText1} className={ClassName}/>
                </CalltoAction>
                }
                {!!sub2 &&
                    <Subtitle>{sub2}</Subtitle>
                }
                {text2}
                {!!imageSrc2 &&
                <ImgContent>
                    <NextImage src={imageSrc2} width={1500} height={1500} alt={alt2} className='imgPost' />
                </ImgContent>
                }
                {!!postName2 &&
                <CalltoAction>
                    <NextLink href={`/blog/${postName2}/`} target='_self' text={ancorText2} className={ClassName}/>
                </CalltoAction>
                }
                 {!!sub3 &&
                    <Subtitle>{sub3}</Subtitle>
                }
                {text3}
                {!!imageSrc3 &&
                <ImgContent>
                    <NextImage src={imageSrc3} width={1500} height={1500} alt={alt3} className='imgPost' />
                </ImgContent>
                }
                {!!postName3 &&
                <CalltoAction>
                    <NextLink href={`/blog/${postName3}/`} target='_self' text={ancorText3} className={ClassName}/>
                </CalltoAction>
                }
                 {!!sub4 &&
                    <Subtitle>{sub4}</Subtitle>
                }
                {text4}
                {!!imageSrc4 &&
                <ImgContent>
                   <NextImage src={imageSrc4} width={1500} height={1500} alt={alt4} className='imgPost' />
                </ImgContent>
                }
                {!!postName4 &&
                <CalltoAction>
                    <NextLink href={`/blog/${postName4}/`} target='_self' text={ancorText4} className={ClassName}/>
                </CalltoAction>
                }
            </Text>
        </Container>
    )
}

export default CardService