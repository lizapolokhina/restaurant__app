import {  useCart } from "react-use-cart";
import '../../App.css';

export const Cart = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
    emptyCart
  } = useCart();

  if (isEmpty) return <p>Your cart is empty</p>;

  return (
    <>
      <h1 className="cart">Cart ({totalUniqueItems})</h1>

      <ul className="cart__list">
        {items.map((item) => (
          <li 
          key={item.id}
          className="cart__item"
          >
             {item.title} ({item.category}) - {item.quantity}
             <div className="cart__buttons">
             <button
             className="cart__buttonsMinus"
              onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
            >
              -
            </button>
            <button
            className="cart__buttonsPlus"
              onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
            >
              +
            </button>
            <button 
            className="cart__buttonsRemove"
              onClick={() => removeItem(item.id)}>
                &times;
            </button>
             </div>
          </li>
        ))}
      </ul>

      <button 
      className="cart__emptyButton"
      onClick={() => emptyCart()}
      >
        empty cart
      </button>
    </>
  );
}