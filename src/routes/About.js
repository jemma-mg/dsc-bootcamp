import Carousel from "../components/carousel/Carousel";
import Navbar from "../components/navbar/navbar";
import AboutImg from "../assets/trave1.jpg";
import Footer from "../components/footer/footer";
import About from "../components/about/about";

function AboutPage() {
  return (
    <>
        <Navbar/>
        <Carousel
            class__name="carousal"
            carosal__img={AboutImg}
            title="About" 
            btnClass="hide"
        /> 
        <About/>
        <Footer/>
    </>
  );
}

export default AboutPage;