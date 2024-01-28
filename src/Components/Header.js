import { LOGO_URL } from "../utils/constants";
import {  useContext, useState } from "react";
import { Link,NavLink } from "react-router-dom";
import useOnlinestatus from "../utils/useOnlinestatus";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { HiPhone } from "react-icons/hi";
import { HiHome, HiBuildingOffice, HiShoppingBag } from "react-icons/hi2";
import { FaQuestionCircle } from "react-icons/fa";
import Usercontext from "./Usercontext";
import { useSelector } from "react-redux";



const Header = () => {
//as soon as u click button react refreshes and rerenders the whole header componenet
const [btnname,setbtnname]=useState("Login");

//if no dependency array=>useEffect is called on every render
//if dependemcy array is empty =[]=>useEffect is called on inital render (just once)
//if dependemcy array is [btnname]=>called on everytime btnname is updated 

const {LoggedinUser}=useContext(Usercontext);

const Onlinestatus=useOnlinestatus();

const cartItems= useSelector((store)=>store.cart.items);

  return (

  
     <div className="shadow-md  bg-white w-full   sm:pr-4">
    <div className="flex justify-between container mx-auto py-1 px-4 md:flex md:justify-between md:items-center">
      <div className="flex items-center -ml-5 sm:ml-0 justify-between">
      

      <Link to="/">

     
          <img
            
            className=" w-max md:h-20 p-3"
            src={LOGO_URL}
            alt="Logo"
          />
 </Link>
      </div>
 



      <div className="flex items-center">
      <ul className="flex text-[10px] sm:text-[16px] font-semibold md:font-normal items-center space-x-2 sm:space-x-3 md:space-x-4">
          <li className="px-4">Online Status :{Onlinestatus ? "🟢" :"🔴"   }</li>
          <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-orange-400 " : "text-black"
              }
            >
              <li className="hover:text-orange-400 transition-all duration-300 ease-in-out flex items-center gap-2">
                <span className="hidden md:block">
                  <HiHome />
                </span>
                Home
              </li>
            </NavLink>


            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-orange-400 " : "text-black"
              }
            >
              <li className="hover:text-orange-400 transition-all duration-300 ease-in-out flex items-center gap-2">
                <span className="hidden md:block">
                  <HiBuildingOffice />
                </span>
                About
              </li>
            </NavLink>

          
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-orange-400 " : "text-black"
              }
            >
              <li className="hover:text-orange-400 transition-all duration-300 ease-in-out flex items-center gap-2">
                <span className="hidden md:block">
                  <HiPhone />
                </span>
                Contact
              </li>
            </NavLink>



            <NavLink
              to="/grocery"
              className={({ isActive }) =>
                isActive ? "text-orange-400 " : "text-black"
              }
            >
              <li className="hover:text-orange-400 transition-all duration-300 ease-in-out flex items-center gap-2">
                <span className="hidden md:block">
                  <FaQuestionCircle />
                </span>
                Help
              </li>
            </NavLink>
            <NavLink
              to="/Cart"
              className={({ isActive }) =>
                isActive ? "text-orange-400 " : "text-black"
              }
            >
                     <li className="hover:text-orange-400 transition-all duration-300 ease-in-out flex items-center gap-2"> <FontAwesomeIcon
                  icon={faShoppingCart}
                  className="w-4 h-4 sm:w-5 sm:h-5"
                /> Cart ({cartItems.length} Items)</li>   
            
            </NavLink>
           <button    className="  px-2  py-1 mx-1 rounded border border-gray-300 hover:border-gray-500 transition-all duration-200 ease-in-out text-gray-700 cursor-pointer"onClick={()=>{
            if(btnname==="Login")setbtnname("Logout");
            else setbtnname("Login");
           }} >{btnname}</button>
           <li> {LoggedinUser}</li>
        </ul>
      </div>
    </div>
    </div>
  );
};

export default Header;