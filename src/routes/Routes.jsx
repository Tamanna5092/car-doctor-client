import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Checkout from "../pages/Checkout/Checkout";
import Booking from "../pages/Booking/AddService";
import AddService from "../pages/Booking/AddService";
import OrderBook from "../pages/Checkout/OrderBook";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            index: true,
            element: <Home></Home>
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/signup",
          element: <SignUp></SignUp>
        },
        {
          path: "/checkout/:id",
          element: <PrivateRoute><Checkout></Checkout></PrivateRoute>,
          loader: ({params}) => fetch(`https://car-doctor-server-gamma-lilac.vercel.app/services/${params.id}`)
        },
        {
          path: "/addService",
          element: <AddService></AddService>
        },
        {
          path: "/orderBook",
          element: <PrivateRoute><OrderBook></OrderBook></PrivateRoute>
        }
      ]
    },
  ]);
  export default router