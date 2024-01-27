import { useState } from "react";
import Itemlist from "./Itemlist";

const Restaurancategory=({data})=>{
const[showlist,setshowlist]=useState(false);

return <div className=" w-6/12 mx-auto p-4 my-4  bg-gray-100 shadow-md " >
    <div className="flex justify-between cursor-pointer"onClick={()=>{
        setshowlist(!showlist);
    }
    
} >
<span className="font-bold text-lg" >{data.title}  ({data.itemCards.length})</span>
<span>🔽</span>
</div>

{/* for collapsing accordian */}
 { showlist &&< Itemlist items={data?.itemCards}/>} 
</div>
}
export default Restaurancategory;