import React, {useState, useEffect} from 'react'

const API ='https://dummyjson.com/products'
function ProductPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true)
  

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(API);
      const data = await response.json();
      console.log(data);
      setProducts(data.products);
      console.log(products);
      setLoading(false)
    }
    fetchData();
  }, []);
  if (loading) {
    return (
      <div className="App">
        <h1>Cargando...</h1>
      </div>
    );
  }
  return (
    <div>ProductPage</div>
  )
}

export default ProductPage