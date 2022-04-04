import axios from "axios"
import { useEffect, useState } from "react"
import Footer from "../src/components/Footer"
import GetPosts from "../src/components/GetPosts"
import Nav from "../src/components/Nav"
import SocialProof from "../src/components/SocialProof"
import { ISocial } from "./api/social"




function About(){
    const [comments, setComments] = useState<Array<ISocial>>([])

    useEffect(() => {
          const data = async () => {
              const resp = await axios('http://localhost:3000/api/social')

              setComments(resp.data)
          }
          data()
    },[])

    return(
        <div>
            <header>
                <Nav/>
            </header>
            <main>
                <GetPosts />
                <SocialProof comments={comments}/>
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    )
}

export default About