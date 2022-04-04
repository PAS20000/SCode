import { Box ,Text, useColorModeValue, Heading, Divider, SimpleGrid, Container, Avatar, Flex, Stack } from "@chakra-ui/react";
import CustomHeading from "./CustomHeading";


function SocialProof({ comments }) {
  
    return(
      <div>
        <CustomHeading text={'O que falam sobre nós ?'}/>
        <SimpleGrid columns={4}>
        {comments.map(comment =>
                <Flex justifyContent='center' mt={4} key={comment.id}>
                  <Box background={useColorModeValue('white', 'gray.800')} boxShadow={'dark-lg'} width={'90%'}>
                    <Stack direction='column'  align={'center'}>
                      <Avatar src={comment.image} name={comment.name} size={'2xl'} p={'1'} m={'5'} bg={useColorModeValue('#ffbf00','cyan.300')}/>
                      <Heading mb={2} fontSize={32}>
                         {comment.name}
                      </Heading>
                    </Stack>
                    <Divider mt={5}/>
                      <Text as={'div'} p={5}>
                        <Text as={'div'} color={'gray.500'}>
                            {comment.tag}
                        </Text>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                      when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                      It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                      It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                      and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </Text>
                  </Box>
                </Flex>
          )}
        </SimpleGrid>
      </div>
    )
}


export default SocialProof