import { Link } from "react-router-dom";
import icon from '../assets/shopping-cart.png';
import { DataContext } from "../context/ContextProvider";
import { useContext } from "react";

function Navbar() {
  const {setMenu} = useContext(DataContext)
  return (
    <div className="bg-oscuro flex flex-col items-center justify-around sm:flex-row">
      <h1 className="px-4 py-2 m-8 text-white text-2xl font-light flex">
        Ecommerce
      </h1>
      <div className="flex justify-center">
        <Link
          to="/"
          type="button"
          className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white hover:scale-105 drop-shadow-md  shadow-cla-blue rounded-md px-4 py-2 m-8 transition duration-500 ease select-none hover:bg-rojo4 focus:outline-none focus:shadow-outline"
        >
          {" "}
          Home
        </Link>

        <Link
          to="/productos"
          type="button"
          className="bg-gradient-to-r  from-indigo-600 to-indigo-800 text-white hover:scale-105 drop-shadow-md  shadow-cla-blue rounded-md px-4 py-2 m-8 transition duration-500 ease select-none hover:bg-rojo4 focus:outline-none focus:shadow-outline"
        >
          {" "}
          Productos
        </Link>
      </div>
      <div>
      <img src={icon} alt="cart" className="w-12 h-12" onClick={()=> setMenu(true)} />
      </div>
    </div>
  );
}

export default Navbar;
