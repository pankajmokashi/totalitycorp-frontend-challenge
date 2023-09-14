import React, { useState, useEffect } from 'react'
import Header from '../Components/Header';
import Products from '../Components/Products';
import FilterItems from '../Components/FilterItems';
import { useSelector } from "react-redux";
import { AiOutlineCaretDown, AiFillCaretUp } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';

function Home() {
  let { data } = useSelector((state) => state);
  let [filter, setFilter] = useState(false);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if(!token){
      navigate("/");
    }
  })

  return (
    <div className='container'>
        <Header auth={true}/>
        {
          filter ? (
            <div className='filter'>
              <p onClick={() => setFilter(false)}>
                Filter
                <AiFillCaretUp />
              </p>
              <div style={{display: "block"}} className='filter-items'>
                  <FilterItems />
              </div>
            </div>
          ) : (
            <div className='filter'>
              <p onClick={() => setFilter(true)}>
                Filter
                <AiOutlineCaretDown />
                </p>
            </div>
            )
          }
          {
            data.filteredItems.length > 0 ? (
              <Products products = {data.filteredItems} page={"home"}/>
            ) : (
              <Products products = {data.products} page={"home"}/>
            )
          }
        
    </div>
  )
}

export default Home;