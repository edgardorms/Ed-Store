import { createContext, useState, useEffect } from "react";


const API ='https://api.escuelajs.co/api/v1/products'

export const DataContext = createContext();

    export const DataContextProvider =({children}) =>  {
        const [products, setProducts] = useState([]);
        const [loading, setLoading] = useState(true);
        const [carrito, setCarrito] = useState([]);
        const [total, setTotal] = useState(0);
        const [open, setOpen] = useState(false);

        const onOpenModal = () => setOpen(true);
        const onCloseModal = () => setOpen(false);
         
useEffect(() => {
    async function fetchData() {
        const response = await fetch(API);
        const data = await response.json();
        setProducts(data.slice(0,12));
        setLoading(false)
      }
      fetchData();
  }, [])
    
  const reduce = id =>{
    carrito.forEach(item =>{
        if(item.id === id){
            item.quantity === 1 ? item.quantity = 1: item.quantity -=1;
        }
        setCarrito([...carrito])
    })
}
const increase = id =>{
    carrito.forEach(item =>{
        if(item.id === id){
            item.quantity +=1;
        }
        setCarrito([...carrito])
    })
}

 const addCarrito = (id) =>{
         let item = products.find(i => i.id == id)
         item.quantity = 1;

         if (carrito.includes(item)){
            alert('Ya agregaste el producto')
         }else{
            setCarrito([...carrito, item])
         }

         
         console.log(carrito);

}

const removeProducto = id =>{
    if(window.confirm("¿Quieres suspender el producto?")){
        carrito.forEach((item, index)=>{
            if(item.id === id){
                item.quantity = 1;
                carrito.splice(index, 1)
            }
        })
        setCarrito([...carrito])
    }
}

useEffect(() =>{
    const getTotal = () =>{
        const res = carrito.reduce((prev, item) =>{
            return prev + (item.price * item.quantity)
        },0)
        setTotal(res)
    }
    getTotal()
},[carrito])











  return ( 
            <DataContext.Provider value={{products, loading, addCarrito, carrito, total, reduce, increase, removeProducto, onOpenModal, onCloseModal, open}}>
                {children}
            </DataContext.Provider>
        )
    }