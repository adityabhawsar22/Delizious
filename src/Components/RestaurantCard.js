import React,{useContext, useState} from "react";
import { CDN_URL } from "../utils/constants";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import Usercontext from "./Usercontext";

const RestaurantCard=(props)=>{
    // const {LoggedinUser}=useContext(Usercontext);
    const{resData}=props;

    //body passes resdata in props ,we first destructure resData 
    const{
        cloudinaryImageId,
        name,
        avgRating,
        cuisines,
        costForTwo,
        aggregatedDiscountInfo,

    } = resData ;

  

    return(
        <div  className="shadow-md md:shadow-none hover:shadow-2xl ease-in duration-200 rounded"> 

       
        <div className="overflow-hidden w-[250px] py-4 px-4 md:py-2 flex flex-col gap-1 text-[0.7rem] text-[#535665] ">
            <div className=" relative">

            
            <img
            src={
              CDN_URL +
              (cloudinaryImageId === ""
                ? "s6fhwzl0tss0vgrqvcid"
                : cloudinaryImageId)
            }
            alt=""
            className=" rounded object-cover"
          />
          
    <h3 className="font-bold text-base text-black">{name}</h3>
    <h4 className="text-[0.8rem]">{cuisines.join(", ")}</h4>
    <h4>{avgRating}  stars</h4>
    <h4>{costForTwo} </h4>
    {/* <h4>{LoggedinUser} </h4> */}
    </div>
    </div>
    </div>
    
    );
    
    }

    export default RestaurantCard;
    