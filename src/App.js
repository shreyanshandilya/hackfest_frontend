import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import Home from "./pages/home";
import Navbar from "./Navbar/navbar";
import { BrowserRouter } from "react-router-dom";
// import Timeline from "./Component/Timeline";

function App() {
   let router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" elemenet={<Home />}>
        <Route path="about" element={<AboutPage />} />
   
      </Route>
    )
  );

  return (
    <>
        <RouterProvider router={router} />
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
