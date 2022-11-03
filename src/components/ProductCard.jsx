import {DataContext} from '../context/ContextProvider';
import { useContext } from 'react';



function ProductCard({ product }) {
  const {addCarrito} = useContext(DataContext)
    return (
        <div className="p-4 mt-6 w-[360px]">
              <div className="h-[512px] rounded-xl shadow-cla-blue bg-gradient-to-r from-indigo-50 to-blue-50 overflow-hidden">
                <img className="h-48 w-full my-2 object-contain object-center scale-110 transition-all duration-400 hover:scale-100" src={product.images[0]} alt="blog"/>
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{product.category.name}</h2>
                  <h1 className="title-font text-lg font-medium text-gray-600 mb-3">{product.title}</h1>
                  <h2 className="font-extrabold text-lg">US${product.price}</h2>
                  <p className="leading-relaxed mb-3">{product.description}</p>
                  <div className="flex items-center flex-wrap ">
                    <button onClick={() =>addCarrito(product.id)} className="bg-gradient-to-r from-cyan-400 to-blue-400 hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg">Add to cart</button>
                   
                  </div>
                </div>
              </div>
            </div>

    //   <div className="text-center text-white p-5" key={product.id}>
    //     <h2>{product.title}</h2>
    //     <img
    //       className=""
    //       src={product.images[0]}
    //       alt={product.title}
    //     ></img>
    //   </div>
    );
  }
  
  export default ProductCard;