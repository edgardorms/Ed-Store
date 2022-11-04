import { Link } from "react-router-dom";
import icon from "../assets/shopping-cart.png";
import { DataContext } from "../context/ContextProvider";
import { useContext } from "react";
import CartSize from "./CartSize";

function Navbar() {
  const { onOpenModal } = useContext(DataContext);
  return (
    <>
      <div className="fixed z-[1000] bg-gradient-to-r  from-violet-100 to-violet-400 w-full h-[80px] flex flex-row items-center justify-around">
        <h1 className=" hidden px-4 py-2 m-8 text-black text-2xl font-light sm:flex">
          Ecommerce
        </h1>
        <div className="flex justify-center">
          <Link
            to="/"
            type="button"
            className="bg-gradient-to-r  from-orange-300 to-orange-500 text-white hover:scale-105 drop-shadow-md  shadow-cla-blue rounded-md px-4 py-2 my-8 mx-1 first-letter:transition duration-500 ease select-none hover:bg-rojo4 focus:outline-none focus:shadow-outline"
          >
            {" "}
            Home
          </Link>

          <Link
            to="/productos"
            type="button"
            className="bg-gradient-to-r   from-orange-300 to-orange-500 text-white hover:scale-105 drop-shadow-md  shadow-cla-blue rounded-md px-4 py-2 m-8 transition duration-500 ease select-none hover:bg-rojo4 focus:outline-none focus:shadow-outline"
          >
            {" "}
            Products
          </Link>
        </div>
        <div className="flex">
          <img
            src={icon}
            alt="cart"
            className="w-12 h-12"
            onClick={onOpenModal}
          />
          <CartSize />
        </div>
      </div>
    </>
  );
}

export default Navbar;
