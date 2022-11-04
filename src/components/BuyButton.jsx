import React from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { DataContext } from "../context/ContextProvider";
import { useContext } from "react";

function BuyButton() {
  const { carrito, setCarrito } = useContext(DataContext);

  const MySwal = withReactContent(Swal);

  const compra = () => {
    setCarrito([]);
    MySwal.fire({
      title: <strong>Successful purchase!</strong>,
      html: <i>Thanks for trusting us</i>,
      icon: "success",
    });
  };
console.log(carrito);
  if (carrito.length >= 1) {
    return (
      <div>
        <button
          className="btn btn-primary btn-purchase"
          type="button"
          onClick={() => compra()}
        >
          PURCHASE
        </button>
      </div>
    );
  } else return <div className="btn btn-primary btn-purchase">Empty Cart</div>;
}

export default BuyButton;
