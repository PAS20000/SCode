import { SimpleGrid } from "@chakra-ui/react";
import CustomHeading from "./CustomHeading";
import PostCard from "./PostCard";
import {posts} from '../../pages/api/posts'

export default function GetPosts() {

    return(
        <div>
            <CustomHeading text={'Postagens da Scode'}/>
            <SimpleGrid columns={4} spacing={4}>
            {posts.map(post => <PostCard 
                key={post.id} 
                post_id={post.id} 
                postDescription={post.description} 
                postImage={post.image} 
                postTitle={post.title} 
                postDate={post.createdAt}
                postDetails={post.details}
            /> )}
            </SimpleGrid>
        </div>
    )
}