import { LOGO_URL } from "../utils/constants";
import {  useState } from "react";
import { Link } from "react-router-dom";
import useOnlinestatus from "../utils/useOnlinestatus";
const Header = () => {
//as soon as u click button react refreshes and rerenders the whole header componenet
const [btnname,setbtnname]=useState("Login");

//if no dependency array=>useEffect is called on every render
//if dependemcy array is empty =[]=>useEffect is called on inital render (just once)
//if dependemcy array is [btnname]=>called on everytime btnname is updated 

const Onlinestatus=useOnlinestatus();
  return (
    <div className="header">
     <a href="/">
  <img className="logo"alt= "Logo"  src={ LOGO_URL}/>


</a>
      <div className="flex justify-between ">
        <ul>
          <li>Online Status :{Onlinestatus ? "🟢" :"🔴"   }</li>
          <li>
            <Link to="/">Home</Link> </li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to= "/grocery">Grocery</Link></li>
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