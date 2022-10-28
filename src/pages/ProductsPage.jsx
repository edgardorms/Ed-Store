import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";

const API = "../../products.json";
function ProductPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(API, {
        mode: "no-cors",
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      });
      const data = await response.json();
      console.log(data);
      setProducts(data.products);
      console.log(products);
      setLoading(false);
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
    <div className="grid justify-items-center grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => {
        return (
          <div key={product.id}>
            <ProductCard product={product} />
          </div>
        );
      })}
    </div>
  );
}

export default ProductPage;
