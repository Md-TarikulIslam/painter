import { createBrowserRouter } from "react-router-dom";
import Carousel from "../Homepage/Carousel/Carousel";
import Main from "../Main";
import About from "../AboutPage/About/About";
import Contact from "../ContactPage/Contact";
import HousePainting from "../ServicesPage/HousePainting/HousePainting";
import OfficePainting from "../ServicesPage/OfficePainting/OfficePainting";
import InteriorPainting from "../ServicesPage/InteriorPainting/InteriorPainting";
import ExteriorPainting from "../ServicesPage/ExteriorPainting/ExteriorPainting";
import PaintMaster from "../ServicesPage/PaintMaster/PaintMaster";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Carousel></Carousel>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/house-painting",
        element: <HousePainting></HousePainting>,
      },
      {
        path: "/office-painting",
        element: <OfficePainting></OfficePainting>,
      },
      {
        path: "/interior-painting",
        element: <InteriorPainting></InteriorPainting>,
      },
      {
        path: "/exterior-painting",
        element: <ExteriorPainting></ExteriorPainting>,
      },
      {
        path: "/paint-master",
        element: <PaintMaster></PaintMaster>,
      },
      {
        path: "/all-services",
        element: <Carousel></Carousel>,
      },
    ],
  },
]);
export default router;
