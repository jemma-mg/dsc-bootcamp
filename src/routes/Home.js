import Destination from "../components/destination/destination";
import Footer from "../components/footer/footer";
import Carousel from "../components/carousel/Carousel";
import Navbar from "../components/navbar/navbar";
import Trip from "../components/trip/trip";

function Home() {
  return (
    <>
    <Navbar/>
    <Carousel
      class__name="carousal__home"
      carosal__img="https://images.unsplash.com/photo-1655374357824-f51336c891ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDIwNXxGem8zenVPSE42d3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
      title="Creating Your New Story" 
      text="Choose Your Favourite Destination"
      btnText="Travel Plan"
      url="/"
      btnClass="show"
    />
    <Destination/>
    <Trip/>
    <Footer/>
    </>
  );
}

export default Home;