import Footer from "../src/components/Footer";
import Nav from "../src/components/Nav";

export default function Contact() {
    return (
        <div>
            <header>
                <Nav contact={true} about={false}/>
            </header>
            <main>
               
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    )
}