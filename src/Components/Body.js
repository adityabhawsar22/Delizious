import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import React from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
const Body = () => {
  //local state variable
  //always create useState and useEffect inside body on top never in if() for() or fun()
  const [listofRestaurants, setListOfRestraunt] = useState([]);
  const [FilteredRestaurants, setFilteredRestraunt] = useState([]);

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
console.log(json);
    //optional chaining
    setListOfRestraunt(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestraunt(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  //conditional rendering
  if (listofRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => setsearchText(e.target.value)}
          ></input>
          <button
            className="search-btn"
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
        <button
          className="filter-btn"
          
          onClick={() => {
         
            
            const filteredbestList = listofRestaurants.filter(
              (res) => {
                
                return res.info.avgRating > 4.5;}
             
            );
              setFilteredRestraunt(filteredbestList);
          
          }}
        >
          Top Rated Restaurant
        </button>
      </div>

      <div className="res-container">
        {
        FilteredRestaurants.map((restaurant) => (
       <Link className="link" key={restaurant?.info.id} to={"/restaurants/"+ restaurant.info.id }>  <RestaurantCard
           
            // id={restaurant?.info?.id}
            resData={restaurant?.info}
          /></Link> 
        ))}
      </div>
    </div>
  );
};

export default Body;
