
import Footer from "../src/components/Footer"
import GetPosts from "../src/components/GetPosts"
import Nav from "../src/components/Nav"
import SocialProof from "../src/components/SocialProof"




function About(){

    return(
        <div>
            <header>
                <Nav/>
            </header>
            <main>
                <GetPosts />
                <SocialProof />
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    )
}

export default About