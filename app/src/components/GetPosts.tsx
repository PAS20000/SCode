import { SimpleGrid } from "@chakra-ui/react";
import CustomHeading from "./CustomHeading";
import PostCard from "./PostCard";
import { posts } from '../../pages/api/posts'
import useStaticPagination from "../hooks/useStaticPagination/useStaticPagination";

export default function GetPosts() {
    /*const [posts, setPosts] = useState([])

    useEffect(() => {
        (async function() {
            const resp = await fetch('api_url')
            const json = await resp.json()
            setPosts(json)
        })();
    }, [])*/

    const { Page, Bnext, Breturn, DeviceData, DeviceLastPage } = 
    
    useStaticPagination({
        data:posts, 
        sliceCell:1, 
        sliceDesktop:3, 
        sliceTv:4,
        classStyle:"default",
        arrowWeight:100
    })
    
    return(
        <div>
            <CustomHeading text={'Postagens da Scode'}/>
            {Breturn} {Page}-{DeviceLastPage} {Bnext}
            <SimpleGrid columns={4} spacing={4}>
            {DeviceData.map(post => <PostCard 
                key={post.id} 
                post_id={post.id} 
                postDescription={post.description} 
                postImage={post.image}
                postGif={post.gif} 
                postTitle={post.title} 
                postDate={post.createdAt}
                postDetails={post.details}
            /> )}
            </SimpleGrid>
        </div>
    )
}