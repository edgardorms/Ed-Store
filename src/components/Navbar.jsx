import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="bg-oscuro flex flex-col justify-between sm:flex-row">
      <h1 className="px-4 py-2 m-8 text-white text-2xl font-light flex justify-center">
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
    </div>
  );
}

export default Navbar;
