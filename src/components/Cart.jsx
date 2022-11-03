import React from 'react'
import {DataContext} from '../context/ContextProvider';
import { useContext, useState } from 'react';
import CartItem from './CartItem';

function Cart() {
    const {carrito, total, menu, setMenu} = useContext(DataContext)
if (menu) {
  return (
    <div className="flex justify-center overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full">
    <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
    <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
        
    <section className="container content-section">
    <div className='flex justify-between'> <h2 className="section-header">CART </h2><button className="btn btn-danger mt-5" type="button" onClick={()=> setMenu(false)}>Close</button></div>
   
    <div className="cart-row">
        <span className="cart-item cart-header cart-column">ITEM</span>
        
        <span className="cart-quantity cart-header cart-column">QUANTITY</span>
    </div>
    <div className="cart-items">
       
    {carrito.map((product) => {
            return (
              <div key={product.id}>
                <CartItem product={product}/>
              </div>
            );
          })}
      
    </div>
    <div className="cart-total">
        <strong className="cart-total-title">Total</strong>
        <span className="cart-total-price">${total}</span>
    </div>
    <button className="btn btn-primary btn-purchase mb-3" type="button">PURCHASE</button>
</section>
 </div>
 </div>
        </div>
    
  )
}
  
}

export default Cart