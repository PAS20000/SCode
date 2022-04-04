import { Box, Flex, Image, Text, useColorModeValue, Heading, Divider } from "@chakra-ui/react"
import Carousel from "../src/components/Carousel"
import Footer from "../src/components/Footer"
import GetPosts from "../src/components/GetPosts"
import Nav from "../src/components/Nav"




function Home(){

    return(
        <div>
            <header>
                <Nav/>
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