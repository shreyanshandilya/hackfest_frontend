import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import Home from "./pages/home";

export default function App() {
   let router = createBrowserRouter(
     createRoutesFromElements(
      <>
      <Route path="/" element={<Home />}/> 
        <Route path="about" element={<AboutPage />} />
        </>
         
    )
  );

  return (
    <>
        <RouterProvider router={router} />
    </>
  );
}
