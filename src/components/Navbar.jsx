import { Link } from "react-router-dom";
import icon from '../assets/shopping-cart.png';
function Navbar() {
  return (
    <div className="bg-oscuro flex flex-col items-center justify-around sm:flex-row">
      <h1 className="px-4 py-2 m-8 text-white text-2xl font-light flex">
        Ecommerce
      </h1>
      <div className="flex justify-center">
        <Link
          to="/"
          type="button"
          className="border border-indigo-900 bg-indigo-500 text-white rounded-md px-4 py-2 m-8 transition duration-500 ease select-none hover:bg-rojo4 focus:outline-none focus:shadow-outline"
        >
          {" "}
          Home
        </Link>

        <Link
          to="/productos"
          type="button"
          className="border  border-indigo-900 bg-indigo-500 text-white rounded-md px-4 py-2 m-8 transition duration-500 ease select-none hover:bg-rojo4 focus:outline-none focus:shadow-outline"
        >
          {" "}
          Productos
        </Link>
      </div>
      <div>
      <img src={icon} alt="cart" className="w-12 h-12 " />
      </div>
    </div>
  );
}

export default Navbar;
