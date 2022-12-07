import React, { useState } from 'react';
import { CartProvider } from 'react-use-cart';
import './App.css';
import { Cart } from './components/Cart/Cart';
import { Home } from './components/Home/Home';
//import Categories from './components/Categories';
//import MenuItem from './components/MenuItem';


export function App() {
  const [menuList, setMenuList] = useState(true);

  return (
    <>
    <div className="App">
      <button
      className='menuButton'
      onClick={() => setMenuList(!menuList)}
      >
        menu
      </button>
      { menuList && 
      <CartProvider>
      <Home />
      <Cart />
    </CartProvider> }
    </div>
    </>
  );
}
