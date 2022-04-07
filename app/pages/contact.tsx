import Footer from "../src/components/Footer";
import Form from "../src/components/Form";
import Nav from "../src/components/Nav";

export default function Contact() {
    return (
        <div>
            <header>
                <Nav contact={true} about={false}/>
            </header>
            <main>
               <Form/>
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    )
}