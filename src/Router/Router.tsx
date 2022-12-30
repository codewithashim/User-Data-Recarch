import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";

const route = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    }
]);

export default route;