import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assets/travel1.jpg";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";

function About() {
  return (
    <>
        <Navbar/>
        <Hero
            CName="hero-mid"
            heroImg={AboutImg}
            title="About" 
            btnClass="hide"
        /> 
    </>
  );
}

export default About;