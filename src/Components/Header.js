import { LOGO_URL } from "../utils/constants";
import { useEffect, useState } from "react";


const Header = () => {
//as soon as u click button react refreshes and rerenders the whole header componenet
const [btnname,setbtnname]=useState("Login");
console.log("header0");
  return (
    <div className="header">
     <a href="/">
  <img className="logo"alt= "Logo"  src={ LOGO_URL}/>


</a>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
           <button className="Login" onClick={()=>{
            if(btnname==="Login")setbtnname("Logout");
            else setbtnname("Login");
           }} >{btnname}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;