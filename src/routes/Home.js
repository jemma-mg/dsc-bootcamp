import destination from "../components/destination/destination";
import footer from "../components/footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import trip from "../components/trip/trip";

function Home() {
  return (
    <>
    <Navbar/>
      <Hero
        CName="hero"
        heroImg="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dHJhdmVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        title="Creating Your New Story" 
        text="Choose Your Favourite Destination"
        buttonText="Travel Plan"
        url="/"
        btnClass="show"
      />
      <destination/>
      <trip/>
      <footer/>
    </>
  );
}

export default Home;