import { Divider, Heading, useColorModeValue } from "@chakra-ui/react"

function CustomHeading({ text }) {
    return (
        <Heading textAlign={'center'} color={useColorModeValue('purple.500','purple.300')}>
                {text}
                <Divider mt={2}/>
         </Heading>
    )
}


export default CustomHeading