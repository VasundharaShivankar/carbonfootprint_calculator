import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css';
import Home from "./views/Home/Home";
import Booking from "./views/Booking/Booking";
import Destination from "./views/Destination/Destination";
import Login from "./views/Login/Login";
import Review from "./views/Review/Review";
import TimeSlot from "./views/TimeSlot/TimeSlot";
import Dashboard from "./views/Dashboard/Dashboard";
import Contact from "./views/Contact/Contact";
import Payment from "./views/Payment/Payment";
import Admin from "./views/Admin/Admin";
import AloginPage from "./views/Admin/AloginPage";
import Shopping from "./views/Shopping/Shopping"
import Chatbot from "./views/Chatbot/Chatbot"
import Calculator from "./views/Calculator/Calculator";
// import AdminLogin from "./views/Admin/AdminLogin"

function App() {

  const router = createBrowserRouter([

    {
      path: "/",
      element: <Home/>
    },

    {
      path: "/contact",
      element: <Contact/>
    },

    {
      path: "/shopping/:id",
      element: <Destination/>
    },

    {
      path: "/review",
      element: <Review/>
    },

    {
      path: "/booking",
      element: <Booking/>
    },
    
    {
      path: "/chatbot",
      element: <Chatbot/>
    },

    {
      path: "/timeslot",
      element: <TimeSlot/>
    },

    {
      path: "/payment",
      element: <Payment/>
    },

    {
      path: "/login",
      element: <Login/>
    },

    {
      path: "/dashboard",
      element: <Dashboard/>
    },
    {
      path:"/shopping",
      element:<Shopping/>
    },

    // {
    //   path: "/badmin",
    //   element: <Admin/>
    // },

    // {
    //   path: "/admin",
    //   element: <AdminLogin/>
    
    // }

    {
      path: "/badmin",
      element : <AloginPage/>
    },
    {
      path: "/calculator",
      element : <Calculator/>
    }



  ])

  return (
    <>

    {/* === ROUTING HERE  === */}
    <RouterProvider router={router}/>
    
    </>
  );
}

export default App;
