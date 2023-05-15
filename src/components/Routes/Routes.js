import { createBrowserRouter } from "react-router-dom";
import Carousel from "../Homepage/Carousel/Carousel";
import Main from "../Main";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Carousel></Carousel>
            }
        ]
    }
])
export default router