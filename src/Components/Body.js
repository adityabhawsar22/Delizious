import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import React from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlinestatus from "../utils/useOnlinestatus";

const Body = () => {
  //local state variable
  //always create useState and useEffect inside body on top never in if() for() or fun()
  const [listofRestaurants, setListOfRestraunt] = useState([]);
  const [FilteredRestaurants, setFilteredRestraunt] = useState([]);
const[toprated,settoprated]=useState(false);
  const [searchText, setsearchText] = useState("");
  useEffect(() => {
    fetchData();
  }, []);


  async function fetchData() {
    const data = await fetch(
      "https://corsproxy.org/?" +
        encodeURIComponent(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        )
    );
    const json = await data.json();

    //optional chaining
    setListOfRestraunt(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestraunt(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }
const online=useOnlinestatus();
if(online===false) 
return <h1>Oops You are Offline !!!</h1>


  //conditional rendering
  if (listofRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter flex">
        <div className="search  pl-2">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => setsearchText(e.target.value)}
          ></input>
          <button
          className="px-2 py-2 bg-green-100 my-4 ml-2 rounded-lg"
            onClick={() => {
              <input
                type="text"
                className="search-box"
                value={searchText}
                onChange={(e) => setsearchText(e.target.value)}
              ></input>;
              const filterrestaurant = listofRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredRestraunt(filterrestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div className="search  p-2 flex items-center">
        <button
          className="px-4 py-2 bg-orange-100 rounded-lg"
          
          onClick={() => {
         
            settoprated(!toprated);
            
            const filteredbestList = listofRestaurants.filter(
              (res) => {
                
                
                return res.info.avgRating > 4.5;}
             
            );
              
            if(toprated) setFilteredRestraunt(filteredbestList);
            else setFilteredRestraunt(listofRestaurants);
          
          }}
        >
          Top Rated Restaurant
        </button>
        </div>
      </div>

      <div className="flex flex-wrap">
        {
        FilteredRestaurants.map((restaurant) => (
       <Link className="link" key={restaurant?.info.id} to={"/restaurants/"+ restaurant.info.id }> 
        <RestaurantCard // id={restaurant?.info?.id}
        //we are passing props(data,information)to a child component(restuarant card) from parent component
            resData={restaurant?.info}/></Link> 
        ))}
      </div>
    </div>
  );
};

export default Body;
