import React from "react";
import { useCart } from "react-use-cart";

export const MenuItem = (props) => {
  const { addItem } = useCart();
  
  return (
    <div className='menuList'>
        <p>{props.title}</p>
        <p>{props.price}</p>
        <p>{props.ingridients}</p>
        <button onClick={() => addItem(props.item)}>
          add
        </button>
      </div>
  )
}