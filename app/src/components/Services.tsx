import { Box, SimpleGrid } from '@chakra-ui/react';
import { services } from '../../pages/api/services'
import CustomHeading from "./CustomHeading";
import PostCard from "./PostCard";

export default function Serives() {
    return(
        <Box>
            <CustomHeading  text={'Nossos Serviços'} />
            <SimpleGrid columns={5}>
            {services.map(service => <PostCard 
                key={service.id}
                postDate={''} 
                postDescription={service.description} 
                postDetails={service.details} 
                postImage={service.image} 
                postTitle={service.title} 
                post_id={service.id}
            />)}
          </SimpleGrid>
        </Box>
    )
}