import Hero from "./Hero";
import "./App.css";
import Navbar from "./Navbar/navbar";
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <>
    <BrowserRouter> <div>
    <Navbar />
    <Hero/>
  </div></BrowserRouter>
     
    </>
  );
}

export default App;
