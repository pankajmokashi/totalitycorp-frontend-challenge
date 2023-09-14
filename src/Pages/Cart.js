import React, { useState, useEffect } from 'react'
import Header from '../Components/Header';
import Products from '../Components/Products';
import { useNavigate } from 'react-router-dom';

function Cart() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  let [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")));

  useEffect(() => {
    if(!token){
      navigate("/");
    }
  })

  let price = cart.reduce((acc, item) => 
    acc + item.price
  , 0)

  return (
    <div>
        <Header auth={true}/>
        {
          cart.length > 0 ? (
            <>
            <div className='cart-title'>
              <p>Your Cart</p>
              <p>Total items: <span>{cart.length}</span></p>
              <p>Total ammount: <span>${price}</span></p>
              <button onClick={() => navigate("/checkout")}>Checkout</button>
            </div>
            <Products products={cart} page={"cart"} setCart= {setCart}/>
            {
              cart.length > 0 && (
                <button className='clear-cart' onClick={() => {
                  setCart([]);
                  localStorage.setItem("cart", JSON.stringify(cart));
                }}>Clear Cart</button>
              )
            }
            </>
          ): (
            <div className='cart-title'>Your cart is empty.</div>
          )
        }
    </div>
  )
}

export default Cart;