import Carousel from "../components/carousel/Carousel";
import Navbar from "../components/navbar/navbar";
import AboutImg from "../assets/t3.jpg";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

function Contact() {
  return (
    <>
      <Navbar/>
      <Carousel
          CName="hero-mid"
          heroImg={AboutImg}
          title="Contact" 
          btnClass="hide"
      /> 
    </>
  ); 
}

export default Contact;