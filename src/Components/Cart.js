import { useDispatch, useSelector } from "react-redux";
import Itemlist from "./Itemlist";
import { clearCart } from "../utils/cartslice";
import { Link } from "react-router-dom";

const Cart=()=>{
    const dispatch= useDispatch();
    const handleclearcart=()=>{

        dispatch(clearCart());
    }
const cartItems = useSelector((store)=>store.cart.items)
if(cartItems.length===0)  
return (
<div className="flex flex-col items-center h-screen">
    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0" className="h-1/2 pt-5 pb-4 my-4 relative "/>
    <h1 className="text-black text-1xl font-bold">Your Cart Is Empty</h1>
    <h1 className="text-black text-1xl font-semibold">Go to home page for more restaurants</h1>
    <a className="mt-4"> 
    <Link to="/"><button className="bg-white hover:bg-orange-300 text-gray-800 font-semibold py-2 px-4 border border-orange-300 rounded shadow" >See Restaurants Near You</button></Link>
    </a></div>
)
else
    return(
        <div className="w-6/12 m-auto">
            
            <Itemlist items={cartItems}/>
        
            <button onClick={handleclearcart} className=" text-center p-2 m-2 bg-black text-white font-bold rounded-lg">Clear Cart</button>
        

        </div>
    )


}

export default Cart;