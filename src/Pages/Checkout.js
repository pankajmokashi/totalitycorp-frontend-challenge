import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Checkout() {
  
  let navigate = useNavigate();
  const token = localStorage.getItem("token");
  let [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")));
  let price = cart.reduce((acc, item) => acc + item.price, 0);

  useEffect(() => {
    if(!token){
      navigate("/");
    }
  })

  return (
    <div>
      <Header  auth={true}/>
      <div className='cart-title'>
        Checkout Page
      </div>
      <div className="final-items">
        <table>
          <thead>
            <tr>
              <th>Item Name</th>
              <th></th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>-</td>
                <td>${item.price}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th>Total {`(Count: ${cart.length})`}</th>
              <td>-</td>
              <th>${price}</th>
            </tr>
          </tfoot>
        </table>
        <button className="buy" onClick={() => {
          setCart([]);
          localStorage.setItem("cart", JSON.stringify([]));
          navigate("/home");
          toast.success("Your order will be delivered by tommorow!");
          toast.success("Visit us again!");
        }}>Buy</button>
      </div>
    </div>
  );
}

export default Checkout;
