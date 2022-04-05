import { Box, useColorModeValue } from "@chakra-ui/react"
import Footer from "../src/components/Footer"
import Nav from "../src/components/Nav"
import Services from "../src/components/Services"
import SocialProof from "../src/components/SocialProof"
import WhoScode from "../src/components/WhoScode"




function About(){

    return(
        <div>
            <header>
               <Nav />
               <Box p={'15px'}  w={'full'} bg={useColorModeValue('gray.200','gray.900')} height={70} />
            </header>
            <main>
                <WhoScode />
                <Services />
                <SocialProof />
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    )
}

export default About