import React ,{ Suspense, lazy } from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import About from "./Components/About";
import Contact from "./Components/Contact";
import RestaurantMenu from "./Components/RestauranMenu";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import Error from "./Components/Error";
import { Provider } from "react-redux";
import appstore from "./utils/Appstore";
import Cart from "./Components/Cart";
// import Grocery from "./Components/Grocery";

//chunking
//code splitting
//dynamic bundling
//lazy loading
//on demand loading
const Grocery =lazy(()=>import("./Components/Grocery"));

const Applayout = () => {
  return (
<Provider store={appstore}>
<>
<Header/>
<Outlet/>
</>
</Provider>
 );
};

const appRouter = createBrowserRouter([
{
  path:"/",
  element:<Applayout/>,
 
  children:[
    {
      path:"/restaurants/:resId",
      element:<RestaurantMenu/>,
    },
    {
      path:"/",
      element:<Body/>,
    },
    {
      path:"/about",
      element:<About/>,
    },
    {
      path:"/grocery",
      element:<Suspense fallback= {<h1>Loading </h1>}><Grocery/></Suspense>,
    },
    {
      path:"/contact",
      element:<Contact/>,
    },
    {
      path:"/Cart",
      element:<Cart/>,
    },
  ],
  errorElement:<Error/>,
},





]);




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
