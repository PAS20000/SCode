import { Center, SimpleGrid } from "@chakra-ui/react";
import CustomHeading from "./CustomHeading";
import PostCard from "./PostCard";
import { posts } from '../../pages/api/posts';
import useEasyPagination from "../hooks/useEasyPagination/useEasyPagination";

export default function GetPosts() {
    /*const [posts, setPosts] = useState<T>([])

    useEffect(() => {
        (async function() {
            const resp = await fetch('api_url')
            const json = await resp.json()
            setPosts(json)
        })();
    }, [])*/

    const { DeviceData, MainHtml } = useEasyPagination({
        data:posts,
        classStyle:'purpleCircle',
        ShowItemsOnMobile:1,
        ShowItemsOnDesktop:2,
        ShowItemsOnTv:4,
        CountPages:true,
        CountPageLimit:{
            cell:1,
            desktop:4,
            tv:3
        }
      })

    return(
        <div>
            <CustomHeading text={'Postagens da Scode'}/>
            <SimpleGrid columns={{base:1, md:3, lg:4}} spacing={4}>
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
            <Center>
                <MainHtml />
            </Center>
        </div>
    )
}