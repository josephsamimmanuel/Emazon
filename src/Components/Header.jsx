import React from "react"
import './Header.css';
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";


function Header() {
  const [{basket},dispatch]=useStateValue()
  return (
    <div className="header">
    <Link to={'/'} style={{textDecoration:"none"}}>
      <div className="header__logo">
      <i class="fa-solid fa-store fa-xl"></i>
          <h2 className="header__logoTitle">Emazon</h2>
      </div>
      </Link>

      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <i class="fa-solid fa-magnifying-glass"></i>
      </div>

      <div className="header__nav">

          <div className="nav__item">
            <span className="nav__itemLineOne">Hello Guest</span>
            <span className="nav__itemLineTwo" style={{color:"white"}}>Sign In</span>

            
          </div>

        <Link to={'/checkout'} style={{textDecoration:"none"}}>
        <div className="nav__item">
          <span className="nav__itemLineOne">Your</span>
          <span className="nav__itemLineTwo">Shop</span>
        </div>
        </Link>

        
        <Link to={'/checkout'} style={{textDecoration:"none"}}>
          <div className="nav__itemBasket">
          <i class="fa-solid fa-basket-shopping fa-lg" ></i>
            <span className="nav__itemLineTwo nav__basketCount">{basket.length}</span>
          </div>
          </Link>
          
      </div>
    </div>
  )
}

export default Header