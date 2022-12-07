import "./styles.css";
import Navbar from "./components/navbar/navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Service from "./routes/Service";
import Contact from "./routes/Contact";

function App() {
  return (
    <div className="App">
      <Routes>
        <Navbar/>
      </Routes>
      
    </div>
  );
}