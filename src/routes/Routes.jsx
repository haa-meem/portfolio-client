import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Projects from "../pages/Home/Projects/Projects";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '#projects',
                element: <Projects></Projects>
            }
        ]
    },
]);