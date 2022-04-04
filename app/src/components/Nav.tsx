import { Button, Switch, Flex, Container, useColorMode, useColorModeValue, ButtonGroup, Heading, Text, Box } from '@chakra-ui/react'
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
        <Flex as={'nav'} p={'15px'}  w={'full'} bg={useColorModeValue('gray.300','gray.900')}  justify={'space-between'} position={'fixed'} zIndex={'3'} height={70}>
                <NextLink href={'/'} target={null} text={
                    <Box  _hover={{outline:'none', opacity:'0.5'}} _focus={{outline:'none'}} display='flex'>
                        <NextImage src={'/img/logo.png'} alt='logo' width={60} height={60} className={null} layout={null} />
                        <Heading mt={1} color={'white'}>
                            Scode
                        </Heading>
                    </Box>
                } />
            <Container textAlign={'center'}>
                <ButtonGroup variant={'outline'} mt={0}>
                <NextLink href={'/about'} target={null} text={
                    <Button  color={useColorModeValue('purple.500','purple.300')} borderColor={useColorModeValue('purple.500','purple.300')} 
                    _hover={{opacity:'0.5'}} textTransform={'uppercase'} fontSize={{base:'12px', md:'16px'}}>
                        Sobre
                    </Button>
                }/>
                 <NextLink href={'/contact'} target={null} text={
                    <Button  color={useColorModeValue('purple.500','purple.300')} borderColor={useColorModeValue('purple.500','purple.300')} 
                    _hover={{opacity:'0.5'}} textTransform={'uppercase'} fontSize={{base:'12px', md:'16px'}}>
                        Contato
                    </Button>
                }/>
                </ButtonGroup>
            </Container>
            <Flex mt={'2'}>
                {colorMode === 'light' ?
                <IoMdMoon size={'18px'} color={'white'}/>
                :
                <IoMdSunny size={'18px'} color={'white'}/>
                }
                <Switch size={'md'} onChange={toggleColorMode} ml={'2'} />
            </Flex>
        </Flex>
    )
}