import { Divider, Heading, Square, useColorModeValue } from "@chakra-ui/react"

function CustomHeading({ text }) {
    return (
        <Heading textAlign={'center'} color={useColorModeValue('cyan.500','purple.300')} mt={10}>
                {text}
                <Square>
                    <Divider  bg={useColorModeValue('blue','purple.300')} mt={5} mb={5} width={'50%'}/>
                </Square>
         </Heading>
    )
}


export default CustomHeading