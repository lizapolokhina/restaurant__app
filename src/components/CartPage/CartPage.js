import { useCart } from "react-use-cart";
import { menu } from "../../menu";

export const CartPage = () => {
  const { addItem } = useCart();

  return (
    <div>
      {menu.map((p) => (
        <div key={p.id}>
          <button onClick={() => addItem(p)}>Add to cart</button>
        </div>
      ))}
    </div>
  );
}