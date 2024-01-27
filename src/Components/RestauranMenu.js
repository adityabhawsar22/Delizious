
import { useParams } from "react-router-dom";
import useRestaurantmenu from "../utils/useRestaurantmenu";
import Shimmer from "./Shimmer";
import Restaurancategory from "./Restaurantcategory";
const RestaurantMenu = () => {


  const { resId } = useParams();

 
  const  resInfo =useRestaurantmenu(resId);//custom hook for fetching data to make the code more modular and follow single responsibility principle
 

  if (resInfo == null) return <Shimmer />;
  const { name, cuisines, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  const categories=resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>
    c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"

  );
  return (
    <div className="menu text-center">
      <h1 className="font-bold text-2xl m-6 ">{name}</h1>
      <p className="font-semibold text-lg ">
        {cuisines.join(",")}- {costForTwoMessage}{" "}
      </p>
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
