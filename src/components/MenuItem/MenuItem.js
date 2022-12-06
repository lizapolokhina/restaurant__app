import React from "react";
import '../../App.css';
import { useCart } from "react-use-cart";

export const MenuItem = (props) => {
  const { addItem } = useCart();
  
  return (
    <div className='menuList'>
      <div className="menuItem">
        <p className="menuItem__title">{props.title}</p>
        <p className="menuItem__price">{props.price}</p>
        <p className="menuItem__ingridients">{props.ingridients}</p>
        <button 
          onClick={() => addItem(props.item)}
          className="addToCartButton"
          >
          add
        </button>
      </div>
        
      </div>
  )
}