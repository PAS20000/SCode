import { SimpleGrid } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { IPost } from "../../pages/api/posts";
import CustomHeading from "./CustomHeading";
import PostCard from "./PostCard";

export default function GetPosts() {
    const [posts, setPosts] = useState<Array<IPost>>([])

    useEffect(() => {
        const data = async () => { 
            const resp = await axios('http://localhost:3000/api/posts')  //https://scode-sigma.vercel.app/
            setPosts(resp.data)
            
        }

        data()
    }, [])


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