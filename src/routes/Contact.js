import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assets/t3.jpg";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

function Contact() {
  return (
    <>
     <Navbar/>
        <Hero
            CName="hero-mid"
            heroImg={AboutImg}
            title="Contact" 
            btnClass="hide"
        /> 
    </>
  ); 
}

export default Contact;