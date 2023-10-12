import {
    createBrowserRouter,
  } from "react-router-dom";
import Mainlayout from "../layout/Mainlayout";
import Home from "../Home/Home";
import Services from "../Services/Services";
import About from "../Home/About";
import Error from "../Error";
import Login from "../Log/Reg/Login";
import Registration from "../Log/Reg/Registration";
import CardsDetails from "../Services/CardsDetails";
import ProtectedRoute from "../ProtectedRoute";
import Contact from "../Contact";
import Profile from "../Header/Profile";

  const router = createBrowserRouter([
    {
      path: "/",
      errorElement:<Error></Error>,
      element: <Mainlayout></Mainlayout>,
      children:[
        {
            path:'/',
            loader:()=>fetch('/data.json'),
            element:<Home></Home>
        },
        {
            path:'/about',
            element:<About></About>
        },
        {
            path:'/services',
            loader:()=>fetch('/data.json'),
            element:<Services></Services>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/reg',
          element:<Registration></Registration>
        },
        {
          path:"/details/:id",
          loader:()=>fetch('/data.json'),
          element:<ProtectedRoute><CardsDetails></CardsDetails></ProtectedRoute>
        }
       ,{
        path:'/contact',
        element:<ProtectedRoute><Contact></Contact></ProtectedRoute>
       },
       {
        path:'/profile',
        element:<ProtectedRoute><Profile></Profile></ProtectedRoute>
       }
      ]
    },
  ]);
  
  export default router ;