import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
// import ResList from "../utils/mockdata";
import React from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  //local state variable
  const [listofRestaurants, setListOfRestraunt] = useState([]);
  const [FilteredRestaurants, setFilteredRestraunt] = useState([]);

  const [searchText, setsearchText] = useState("");
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    console.log("helloo");
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
          <RestaurantCard
            key={restaurant?.info.id}
            id={restaurant?.info?.id}
            resData={restaurant?.info}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
