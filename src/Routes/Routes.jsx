import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Components/Pages/Home/Home";
import Contact from "../Components/Pages/Contact/Contact";
import Dashboard from "../Components/Pages/Dashboard/Dashboard";
import Menu from "../Components/Pages/Menu/Menu";
import Shop from "../Components/Pages/Shop/Shop";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/dashboard",
                element: <Dashboard />
            },
            {
                path: "/menu",
                element: <Menu />
            },
            {
                path: "/shop",
                element: <Shop />
            }
        ]
    }
])