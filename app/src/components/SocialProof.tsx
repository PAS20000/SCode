import { Box ,Text, useColorModeValue, Heading, Divider, SimpleGrid, Avatar, Flex, Stack, Center } from "@chakra-ui/react";
import CustomHeading from "./CustomHeading";
import { comments } from "../../pages/api/social"
import useEasyPagination from "../hooks/useEasyPagination/useEasyPagination";

function SocialProof() {
      const {DeviceData, MainHtml} = useEasyPagination({
        data:comments,
        ShowItemsOnDesktop:2,
        ShowItemsOnMobile:1,
        ShowItemsOnTv:4,
        classStyle:'greenCircle',
        CountPages:true,
        CountPageLimit:{
          cell:1,
          desktop:2,
          tv:1
        }
      })
      const useColor = useColorModeValue('cyan.500','purple.300')
      const useBg = useColorModeValue('white', 'gray.800')
    return(
      <div>
        <CustomHeading text={'O que falam sobre nós ?'}/>
        <SimpleGrid columns={{base:1, md:2, lg:4}}>
        {DeviceData.map(comment =>
                <Flex justifyContent='center' mt={4} key={comment.id}>
                  <Box background={useBg} boxShadow={'dark-lg'} width={'90%'}>
                    <Stack direction='column'  align={'center'}>
                      <Avatar src={comment.image} name={comment.name} size={'2xl'} p={'1'} m={'5'} bg={useColor}/>
                      <Heading mb={2} fontSize={32} color={useColor}>
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
        <Center mt={5}>
          {MainHtml()}
        </Center>
      </div>
    )
}


export default SocialProof