import Home from "../pages/Home/Home.jsx";
import Root from "../Root.jsx";
import { createBrowserRouter } from "react-router-dom";



const router = createBrowserRouter([
    {
    path:"/",
    element: <Root />,
    children:[
        {
            path:"/home",
            element: <Home />
        },
    ]
}
]);

export default router;