import React from "react";
import { MenuItem } from "../MenuItem/MenuItem";
import { menu } from "../../menu";

export const Home = () => {
  return (
    <div>
      {menu.map((item) => 
      {
        return (
          <MenuItem 
          title = {item.title}
          price = {item.price}
          ingridients = {item.ingridients}
          item = {item}
          key = {item.id}
          />
        )
      }   
        )}
    </div>
  )
}