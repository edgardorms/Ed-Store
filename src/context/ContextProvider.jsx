import { createContext, useState, useEffect } from "react";


const API ='https://dummyjson.com/products'

export const DataContext = createContext();

    export const DataContextProvider =({children}) =>  {
        const [products, setProducts] = useState([]);
        const [loading, setLoading] = useState(true);
        
useEffect(() => {
    async function fetchData() {
        const response = await fetch(API);
        const data = await response.json();
        console.log(data);
        console.log(data);
        setProducts(data.products);
        console.log(products);
        setLoading(false)
      }
      fetchData();
  }, [])
    
  return ( 
            <DataContext.Provider value={{text: "holaaa", x: 100, products, loading}}>
                {children}
            </DataContext.Provider>
        )
    }