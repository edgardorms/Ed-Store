import React from "react";
import { DataContext } from "../context/ContextProvider";
import { useContext } from "react";
import CartItem from "./CartItem";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import BuyButton from "./BuyButton";

function Cart() {
  const { carrito, total, onCloseModal, open, setCarrito } =
    useContext(DataContext);

  if (open) {
    return (
      <Modal open={open} onClose={onCloseModal} center>
        <section className="container content-section">
          <div className="flex justify-between">
            <h2 className="section-header">CART </h2>
          </div>

          <div className="cart-row">
            <span className="cart-item cart-header cart-column">ITEM</span>

            <span className="cart-quantity cart-header cart-column">
              QUANTITY
            </span>
          </div>
          <div className="cart-items">
            {carrito.map((product) => {
              return (
                <div key={product.id}>
                  <CartItem product={product} />
                </div>
              );
            })}
          </div>
          <div className="cart-total">
            <strong className="cart-total-title">Total</strong>
            <span className="cart-total-price">${total}</span>
          </div>
          <BuyButton />
        </section>
      </Modal>
    );
  }
}

export default Cart;
