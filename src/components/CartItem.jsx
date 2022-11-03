import { DataContext } from "../context/ContextProvider";
import { useContext } from "react";

function CartItem({ product }) {
  const { reduce, increase, removeProducto } = useContext(DataContext);

  return (
    <div className="cart-row">
      <div className="cart-item cart-column">
        <img
          className="cart-item-image"
          src={product.images[0]}
          width="100"
          height="100"
        />
        <span className="cart-item-title">{product.title} ${product.price}</span>
      </div>
      
      <div className="cart-quantity cart-column">
        <div>
          <button className="bg-green-600" onClick={() => increase(product.id)}>
            ⬆
          </button>
          <p className="cantidad">{product.quantity}</p>
          <button className="bg-red-600" onClick={() => reduce(product.id)}>
            ⬇
          </button>
        </div>
        <button
          className="btn btn-danger ml-5"
          type="button"
          onClick={() => removeProducto(product.id)}
        >
          REMOVE
        </button>
      </div>
    </div>
  );
}

export default CartItem;
