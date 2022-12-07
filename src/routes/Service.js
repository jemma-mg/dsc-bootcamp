import Carousel from "../components/carousel/Carousel"
import Navbar from "../components/navbar/navbar";
import AboutImg from "../assets/t4.jpg";
import Footer from "../components/Footer";
import Trip from "../components/Trip";

function Service() {
  return (
    <>
      <Navbar/>
      <Carousel
          CName="hero-mid"
          heroImg={AboutImg}
          title="Service" 
          btnClass="hide"
      /> 
    </>
  );
}

export default Service;


