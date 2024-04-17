import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import Home from "./pages/home";
import ProblemPage from "./pages/Problems";

export default function App() {
   let router = createBrowserRouter(
     createRoutesFromElements(
      <>
      <Route path="/" element={<Home />}/> 
        <Route path="about" element={<AboutPage />} />
        <Route path="problems" element={<ProblemPage/>} />
        </>
         
    )
  );

  return (
    <>
        <RouterProvider router={router} />
    </>
  );
}
