import { Switch, Flex, Container, useColorMode, useColorModeValue, Heading, Box, Text } from '@chakra-ui/react'
import { useEffect } from 'react'
import { IoMdMoon, IoMdSunny } from 'react-icons/io'
import useResponsive from '../hooks/useResponsive'
import NextImage from './Contracts/NextImage/NextImage'
import NextLink from './Contracts/NextLink/NextLink'

export default function Nav() {
    const { colorMode, toggleColorMode } = useColorMode()
    const { width, height } = useResponsive()

    useEffect(() => {
        console.info('This site uses window.innerWidth and window.innerHeight for responsiveness of some functionality, please refresh the page if in inspect element.')
    }, [])

    return(
        <Flex as={'nav'} p={'15px'}  w={'full'} bg={useColorModeValue('white','gray.900')}  justify={'space-between'} position={'fixed'} zIndex={'3'} height={70} boxShadow={'dark-lg'}>
                <NextLink href={'/'} target={null} text={
                    <Flex  _hover={{transition:'0.5s',opacity:0.5 }} >
                        <NextImage src={'/img/logo.png'} alt='logo' width={60} height={60} className={null} layout={null} />
                        <Heading mt={1} color={useColorModeValue('black','white')}>
                            Scode
                        </Heading>
                    </Flex>
                } />
            <Container textAlign={'center'} display={'flex'} justifyContent={'center'}>
                <NextLink href={'/about'} target={null} text={
                    <Box mr={2} p={3} border={'1px'}  borderRadius={'md'} 
                    color={useColorModeValue('cyan.500','purple.300')} borderColor={useColorModeValue('cyan.500','purple.300')} 
                    _hover={{ transition:'1s', bg:useColorModeValue('cyan.500','purple.300'), color:useColorModeValue('white','black')}} textTransform={'uppercase'} fontSize={{base:'12px', md:'16px'}}>
                        <Text fontWeight={'bold'}>Sobre</Text>
                    </Box>
                }/>
                 <NextLink href={'/contact'} target={null} text={
                    <Box _hover={{ transition:'1s' ,bg:useColorModeValue('cyan.500','purple.300'), color:useColorModeValue('white','black')}} p={3} border={'1px'} borderRadius={'md'} 
                    color={useColorModeValue('cyan.500','purple.300')} borderColor={useColorModeValue('cyan.500','purple.300')} 
                    textTransform={'uppercase'} fontSize={{base:'12px', md:'16px'}}>
                        <Text fontWeight={'bold'}>Contato</Text>
                    </Box>
                }/>
            </Container>
            <Flex mt={'2'}>
                {colorMode === 'light' ?
                <IoMdMoon size={'18px'} color={'black'}/>
                :
                <IoMdSunny size={'18px'} color={'yellow'}/>
                }
                <Switch size={'md'} onChange={toggleColorMode} ml={'2'} />
            </Flex>
        </Flex>
    )
}