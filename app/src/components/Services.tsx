import { Box, Center, SimpleGrid } from '@chakra-ui/react';
import { services } from '../../pages/api/services'
import useEasyPagination from '../hooks/useEasyPagination/useEasyPagination';
import CustomHeading from "./CustomHeading";
import PostCard from "./PostCard";

export default function Serives() {
    const { DeviceData, MainHtml } = useEasyPagination({
        data:services,
        classStyle:'orangeCircle',
        ShowItemsOnMobile:2,
        ShowItemsOnDesktop:4,
        ShowItemsOnTv:5,
        CountPages:true,
        CountPageLimit:{
            cell:1,
            desktop:3,
            tv:3
        }
      })
    return(
        <Box>
            <CustomHeading  text={'Nossos Serviços'} />
            <SimpleGrid columns={{base:2, md:4, lg:5}}>
            {DeviceData.map(service => <PostCard 
                key={service.id}
                postDate={''} 
                postDescription={service.description} 
                postDetails={service.details} 
                postImage={service.image}
                postGif={service.gif} 
                postTitle={service.title} 
                post_id={service.id}
            />)}
          </SimpleGrid>
          <Center>
            {MainHtml()}
          </Center>
        </Box>
    )
}