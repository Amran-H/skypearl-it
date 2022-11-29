import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../../Dashboard/Dashboard/Dashboard";
import Main from "../../Layout/Main";
import Login from "../../Login/Login";
import SignUp from "../../Login/SignUp";
import Category from "../../Pages/Category/Category/Category";
import Home from "../../Pages/Home/Home/Home";
import Product from "../../Pages/Product/Product/Product";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/category/:id',
                element: <Category></Category>
            },
            {
                path: '/product/:id',
                element: <Product></Product>
            },
        ]
    },
    {
        path: '/dashboard',
        element: <Dashboard></Dashboard>
    }
])

export default router;