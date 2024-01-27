import { CDN_URL } from "../utils/constants";
const Itemlist = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
          key={item.card.info.id}
        >
          <div className="w-9/12 ">
            <div className="py-2 font-semibold">
              <span>{item.card.info.name}</span>
              <span>
                {" "}
                - ₹{" "}
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs ">{item.card.info.description}</p>
          </div>
          
          <div className="w-3/12 p-4">
            <div className="absolute">

           <button   className="p-2 ml-14 mr-14 my-12 rounded-lg  bg-slate-950/70 text-white shadow-lg">Add+</button>
            
            </div>
            <img src={CDN_URL + item.card.info.imageId} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Itemlist;
