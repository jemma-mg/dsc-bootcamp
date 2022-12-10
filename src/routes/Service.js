import Carousel from "../components/carousel/Carousel"
import Navbar from "../components/navbar/navbar";
import AboutImg from "../assets/t3.jpg";
import Footer from "../components/footer/footer";
import Trip from "../components/trip/trip";

function Service() {
  return (
    <>
      <Navbar/>
      <Carousel
          class__name="carousal"
          carosal__img={AboutImg}
          title="Service" 
          btnClass="hide"
      /> 
      <Trip/>
      <Footer/>
    </>
  );
}

export default Service;


