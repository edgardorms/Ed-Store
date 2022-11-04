import React from 'react'
import { DataContext } from "../context/ContextProvider";
import { useContext } from "react";

function CartSize() {
    const { size } = useContext(DataContext);
    console.log(size);
  return (
    <div className='flex justify-around w-6 h-6 rounded-2xl bg-red-600 text-white'>{size}</div>
  )
}

export default CartSize