import Hero from "./Hero";
import "./App.css";
import Navbar from "./Navbar/navbar";
import { BrowserRouter } from "react-router-dom";
// import Timeline from "./Component/Timeline";

function App() {
  return (
    <>
      <BrowserRouter>
        {" "}
        <div>
          <Navbar />
          <Hero />
          {/* <Timeline /> */}
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
