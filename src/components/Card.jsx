import React from 'react'
import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";
import { useDispatch } from 'react-redux';
import { AddItem } from '../redux/cartSlice';
import { toast } from 'react-toastify';

function Card({ name, image, id, price, type }) {
  let dispatch = useDispatch();

  return (
    <div className='w-[300px] h-[400px] bg-white p-3 rounded-lg flex flex-col gap-3 shadow-lg hover:border-2 border-green-300'>

      {/* Image */}
      <div className='w-full h-[60%] overflow-hidden rounded-lg'>
        <img src={image} alt={name} className='w-full h-full object-cover' />
      </div>

      {/* Name */}
      <div className='text-2xl font-semibold'>
        {name}
      </div>

      {/* Price + Type */}
      <div className='w-full flex justify-between items-center'>
        
        {/* Price */}
        <div className='text-lg font-bold text-green-500'>
          Rs {price}/-
        </div>

        {/* Veg / Non-Veg */}
        <div className={`flex items-center gap-2 text-lg font-semibold ${
          type === "veg" ? "text-green-500" : "text-red-500"
        }`}>
          
          {/* Dot */}
          <div className={`w-3 h-3 rounded-full ${
            type === "veg" ? "bg-green-500" : "bg-red-500"
          }`}></div>

          {/* Icon */}
          {type === "veg" ? <LuLeafyGreen /> : <GiChickenOven />}

          {/* Text */}
          <span>
            {type === "veg" ? "Veg" : "Non-Veg"}
          </span>
        </div>
      </div>

      {/* Button */}
      <button
        className='w-full p-3 rounded-lg bg-green-500 text-white hover:bg-green-400 transition-all'
        onClick={() => {
          dispatch(AddItem({
            id: id,
            name: name,
            price: price,
            image: image,
            qty: 1
          }));
          toast.success("Item added to cart 🛒");
        }}
      >
        Add to Cart
      </button>

    </div>
  )
}

export default Card;