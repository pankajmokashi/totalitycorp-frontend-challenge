import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Loader from "../Loader";

import "./styles.css";

function Products({ products, page, setCart }) {
  const [loading, setLoading] = useState(true);
  const [disabledButtons, setDisabledButtons] = useState([]);
  let cart = JSON.parse(localStorage.getItem("cart"));

  let [finalProducts, setFinalProduct] = useState(
    page === "home" ? products : cart
  );

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  function handleAddToCart(item, index) {
    const updatedDisabledButtons = [...disabledButtons];
    updatedDisabledButtons[index] = true;
    setDisabledButtons(updatedDisabledButtons);
    cart = [...cart, item];
    localStorage.setItem("cart", JSON.stringify(cart));
    toast.success("Item added to cart!");
  }

  function handleRemoveFromCart(item){
    cart = cart.filter((curr) => curr.id !== item.id);
    setFinalProduct(cart);
    setCart(cart);
    localStorage.setItem("cart", JSON.stringify(cart));
    toast.success("Item removed from cart!");
  }

  return (
    <div className="products">
      {finalProducts?.map((item, index) => (
        <div key={index} className="item">
          <div className="image">
            {loading ? (
              <Loader />
            ) : (
              <img
                src={`https://source.unsplash.com/random/?${item.name}`}
                alt="prod"
              />
            )}
          </div>
          <p className="title">{item.name}</p>
          <div className="info">
            <p>
              Price: <span>${item.price}</span>
            </p>
            <p>
              Rating: <span>{item.rating}</span>
            </p>
          </div>
          {page === "home" ? (
            <button
              onClick={() => {
                handleAddToCart(item, index);
              }}
              disabled={disabledButtons[index]}
              className={disabledButtons[index] ? 'disabled-button' : ''}
            >
              {disabledButtons[index] ? 'Already Added' : `Add To Cart`}
            </button>
          ) : (
            <button
              onClick={() => {
                handleRemoveFromCart(item)
              }}
            >
              Remove from Cart
            </button>
          )}
        </div>
      ))}
    </div>
  );
}

export default Products;
