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
      <Route path="/" elemenet={<Home />}>
        <Route path="about" element={<AboutPage />} />

      </Route>
    )
  );

  return (
    <>
        <RouterProvider router={router} />
    </>
  );
}
