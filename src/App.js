import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";

console.log("hello");
const Applayout = () => {
  return (

<>
<Header/>
<Body/>
<Footer/>
</>


  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout />);
