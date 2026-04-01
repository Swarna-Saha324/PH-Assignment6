import React from 'react';
import { useState } from 'react';
import { toast } from "react-toastify";
function ModelCard({ model,cartItems , setCartItems }) {

    const tagStyles = {
  "Best Seller": "bg-orange-100   text-orange-600",
  Popular: "bg-purple-100 text-purple-600",
  New: "bg-green-100 text-green-600",
};

const [buyBtn , setbuyBtn] = useState(false);
const handlebtn = () => {
   const isFound = cartItems.find((item) => item.id === model.id);

    if (isFound) {
      toast.error("Item already in cart!");
      return;
    }
 setCartItems([...cartItems, model]);
    setbuyBtn(true);
    toast.success(`${model.name} added to cart!`)
    
}
    return(
      <div className="card w-96 bg-base-100 shadow-sm">
  <div className="card-body">
    <div className="flex items-end justify-end">
    <span
  className={`badge ${
    tagStyles[model.tag] }`}
>
    
  {model.tag}
</span>
</div>
 <figure className="flex items-start justify-start">
    <img
      src={model.icon}
      alt="Shoes" />
  </figure>

    <div className="flex justify-between gap-4">
      <h2 className="text-xl font-bold">{model.name}</h2>
      <span className="text-xl">${model.price}/mo</span>
    </div>
    <p className="text-sm text-gray-500">{model.description}</p>

    {model.features.map((feature, index) => (
      <ul key={index}>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>{feature}</span>
      </ul>
    ))}
    <div className="mt-6">
      <button 
  onClick={() => handlebtn()} 
  disabled={buyBtn} 
  className={`btn btn-primary btn-block ${buyBtn ? "bg-green-500 opacity-70" : "bg-gradient-to-r from-[#5E3BEE] to-[#9B37FD] text-white"}`}
>
  {buyBtn ? "Added to Cart" : "Buy Now"}
</button>
    </div>
  </div>
</div>
      
    )

}
export default ModelCard;