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
            carosal__img="https://images.unsplash.com/photo-1582401818608-1cf80c1af532?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDc4NHxGem8zenVPSE42d3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
            title="About" 
            btnClass="hide"
        /> 
        <About/>
        <Footer/>
    </>
  );
}

export default AboutPage;