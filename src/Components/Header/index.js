import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./styles.css";
import { AiOutlineMenu } from "react-icons/ai";

function Header({ auth }) {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const navigate = useNavigate();

  function handleLogout(){
    localStorage.removeItem("token");
    navigate("/");
  }

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink to="/home" className="nav-logo">
            e-Commerce
            <i className="fas fa-code"></i>
          </NavLink>

          {auth && (
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <NavLink to="/home" className="nav-links" onClick={handleClick}>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/cart" className="nav-links" onClick={handleClick}>
                  Cart
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/" className="nav-links" onClick={handleLogout}>
                  Logout
                </NavLink>
              </li>
            </ul>
          )}

          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}>
              <AiOutlineMenu />
            </i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
