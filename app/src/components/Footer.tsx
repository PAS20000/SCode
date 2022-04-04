import { Box, Image,Text } from "@chakra-ui/react"

function Footer() {
    return(
        <div>
            <Box  display={'flex'} justifyContent={'center'}>
                <Image src={'/img/logo.png'} height={75} width={75} />
                <Text mt={5}>©Scode todos os direitos reservados 04/2022</Text>
            </Box>
        </div>
    )
}

export default Footer