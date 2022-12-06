import React from 'react';
import { CartProvider } from 'react-use-cart';
import './App.css';
import { Cart } from './components/Cart/Cart';
import { Home } from './components/Home/Home';
//import Categories from './components/Categories';
//import MenuItem from './components/MenuItem';


export function App() {

  return (
    <>
    <CartProvider>
      <Home />
      <Cart />
    </CartProvider>
    </>
  );
}
