import Carousel from "../components/carousel/Carousel";
import Navbar from "../components/navbar/navbar";
import AboutImg from "../assets/travel1.jpg";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";

function About() {
  return (
    <>
        <Navbar/>
        <Carousel
            CName="hero-mid"
            heroImg={AboutImg}
            title="About" 
            btnClass="hide"
        /> 
    </>
  );
}

export default About;