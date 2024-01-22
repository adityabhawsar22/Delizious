import { useEffect,useState } from "react";
import { FETCH_MENU_URL } from "../utils/constants";

const useRestaurantmenu=(resId)=>{
const [resInfo,SetresInfo]=useState(null);
    useEffect(()=>{
fetchmenu();
    },[])
   
    const fetchmenu =async()=>{

        const data= await fetch(FETCH_MENU_URL+resId);

        const json= await data.json();


      SetresInfo(json.data);
    }


return resInfo;
}
export default useRestaurantmenu; 