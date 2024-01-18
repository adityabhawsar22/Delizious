import RestaurantCard from "./RestaurantCard";
import { useState, useEffect} from "react";
// import ResList from "../utils/mockdata";
import React from "react";

const Body=()=>{
 const[listofRestaurants,setListOfRestraunt]=useState([] );
 useEffect(()=>{
    fetchData();

 },[]);
 useEffect(()=>{
console.log("helloo");

},[]);
 async function fetchData(){
    const data = await fetch(
        "https://corsproxy.org/?" +
          encodeURIComponent(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
          )
      );
        const json =await data.json();
        console.log(json);
        setListOfRestraunt(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants );
 };

    return(
    <div className="body">
    <div className="filter">
        <button className="filter-btn"  >
        Top Rated Restaurant</button></div>

      <div className="res-container"> 
{
  listofRestaurants.map((restaurant) => (
    <RestaurantCard
      key={restaurant?.info.id}
      id={restaurant?.info?.id}
      resData={restaurant?.info}
     
    />
  ))
}    
        
      </div>
    
    
    </div>
    );
    
    };

    export default Body;