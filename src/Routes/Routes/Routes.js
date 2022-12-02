import { createBrowserRouter } from "react-router-dom";
import AddProduct from "../../Dashboard/AddProduct/AddProduct";
import AllUsers from "../../Dashboard/AllUsers/AllUsers";
import Dashboard from "../../Dashboard/Dashboard/Dashboard";
import MyBookings from "../../Dashboard/MyBookings/MyBookings";
import MyProducts from "../../Dashboard/MyProducts/MyProducts";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import Login from "../../Login/Login";
import SignUp from "../../Login/SignUp";
import Blog from "../../Pages/Blog/Blog";
import Category from "../../Pages/Category/Category/Category";
import Home from "../../Pages/Home/Home/Home";
import Product from "../../Pages/Product/Product/Product";
import Products from "../../Pages/Products/Products";
import NotFound from "../../Pages/Shared/NotFound";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

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
                path: '/category',
                element: <Category></Category>
            },
            {
                path: '/category/:id',
                element: <PrivateRoute><Products></Products></PrivateRoute>,
                loader: ({ params }) =>
                    fetch(`https://skypearl-it-server.vercel.app/category/${params.id}`)
            },
            {
                path: '/product/:id',
                element: <Product></Product>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '*',
                element: <NotFound></NotFound>
            },
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <MyBookings></MyBookings>
            },
            {
                path: '/dashboard/allusers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: '/dashboard/addproduct',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/dashboard/myproducts',
                element: <MyProducts></MyProducts>
            },
        ]
    }
])

export default router;