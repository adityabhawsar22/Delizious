
import { useParams } from "react-router-dom";
import useRestaurantmenu from "../utils/useRestaurantmenu";
import Shimmer from "./Shimmer";
import Restaurancategory from "./Restaurantcategory";
import { CDN_URL } from "../utils/constants";
const RestaurantMenu = () => {


  const { resId } = useParams();

 
  const  resInfo =useRestaurantmenu(resId);//custom hook for fetching data to make the code more modular and follow single responsibility principle
 

  if (resInfo == null) return <Shimmer />;
  const { name, cuisines, costForTwoMessage,cloudinaryImageId ,totalRatingsString,avgRating} = resInfo?.cards[0]?.card?.card?.info;
console.log(resInfo?.cards[0]?.card?.card?.info);
  const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  const categories=resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>
    c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"

  );
  return (
    <div className="menu text-center">
      <div className="w-6/12 mx-auto p-2 my-4 flex justify-between  bg-gray-50 shadow-md ">

      <div className="text-left  p-2 " >

      
      <h1 className="font-bold text-2xl ">{name}</h1>
    
      <h4 className="font-medium ">
        {cuisines.join(",")} 
      </h4>
      <h4 >{costForTwoMessage}</h4>
      <div className="border w-16 flex items-center p-1 mt-5 font-bold rounded-md text-green-600">
      <h4 className="p-1 ">{avgRating}⭐</h4>
      
      </div>
      <h6 className="text-xs  p-1">{totalRatingsString}</h6>
      </div>
<div>
<img className="w-72" src={CDN_URL+cloudinaryImageId}/>

</div>
</div>


     
{categories.map((category)=>(
  <Restaurancategory 
  key={category?.card?.card.title}
  data={category?.card?.card} />
)
)}

    </div>
  );
};
export default RestaurantMenu;
