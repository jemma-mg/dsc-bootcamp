import Carousel from "../components/carousel/Carousel";
import Navbar from "../components/navbar/navbar";
import ContactImg from "../assets/10.jpg";
import Footer from "../components/footer/footer";
import ContactForm from "../components/contact/contact";

function Contact() {
  return (
    <>
      <Navbar/>
      <Carousel
          class__name="carousal"
          carosal__img={ContactImg}
          title="Contact" 
          btnClass="hide"
      /> 
      <ContactForm/>
      <Footer/>
    </>
  ); 
}

export default Contact;