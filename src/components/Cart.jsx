import React from "react";
import { DataContext } from "../context/ContextProvider";
import { useContext } from "react";
import CartItem from "./CartItem";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

function Cart() {
  const { carrito, total, onCloseModal, open } = useContext(DataContext);
  if (open) {
    return (
      <Modal open={open} onClose={onCloseModal} center>
        <section className="container content-section">
          <div className="flex justify-between">
            {" "}
            <h2 className="section-header">CART </h2>
            <button
              className="btn btn-danger mt-5"
              type="button"
              onClick={onCloseModal}
            >
              Close
            </button>
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
          <button className="btn btn-primary btn-purchase mb-3" type="button">
            PURCHASE
          </button>
        </section>
      </Modal>
    );
  }
}

export default Cart;
