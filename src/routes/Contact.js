import Carousel from "../components/carousel/Carousel";
import Navbar from "../components/navbar/navbar";
import AboutImg from "../assets/t3.jpg";
import Footer from "../components/footer/footer";
import ContactForm from "../components/contact/contact";

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
      <ContactForm/>
      <Footer/>
    </>
  ); 
}

export default Contact;