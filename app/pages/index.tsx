import { Box, useColorModeValue } from "@chakra-ui/react"
import Carousel from "../src/components/Carousel"
import Footer from "../src/components/Footer"
import GetPosts from "../src/components/GetPosts"
import Nav from "../src/components/Nav"




function Home(){

    return(
        <div>
            <header>
                <Nav />
                <Box p={'15px'}  w={'full'} bg={useColorModeValue('gray.200','gray.900')} height={70} />
            </header>
            <main>
                <Carousel />
                <GetPosts />
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    )
}

export default Home