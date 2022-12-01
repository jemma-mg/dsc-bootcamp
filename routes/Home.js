import destination from "../components/destination/destination";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import trip from "../components/trip/trip";

function Home() {
  return (
    <>
      <h1>Call The Components</h1>
      <destination/>
      <trip/>
    </>
  );
}

export default Home;