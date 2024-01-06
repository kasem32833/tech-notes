import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Registger from "../Pages/Registger";


export const router = createBrowserRouter([
    {
        path:"/",
        element:  <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
               
            },
            
        ]
    },
    {
        path: "login",
        element: <Login></Login>
    },
    {
        path: "register",
        element: <Registger></Registger>
    }


])