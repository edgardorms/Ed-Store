import { useContext } from 'react';
import ProductCard from '../components/ProductCard';
import {DataContext} from '../context/ContextProvider';


function ProductPage() {
  
  const {text, x, products, loading} = useContext(DataContext)
 
  
  if (loading) {
    return (
      <div className="App">
        <h1>Cargando...</h1>
      </div>
    );
  }
  return (
    
      
      <div className="grid justify-items-center grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => {
            return (
              <div key={product.id}>
                <ProductCard product={product}/>
              </div>
            );
          })}
        </div>
       
      
    
  )
}

export default ProductPage