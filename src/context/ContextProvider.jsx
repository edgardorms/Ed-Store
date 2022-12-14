import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

const API = "https://api.escuelajs.co/api/v1/products";

export const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [carrito, setCarrito] = useState([]);
  const [total, setTotal] = useState(0);
  const [open, setOpen] = useState(false);
  const [size, setSize] = useState(0);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const notify = () => {
    toast.success("Product added!", {
      position: toast.POSITION.BOTTOM_LEFT,
      pauseOnFocusLoss: false,
    });
  };

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(API);
      const data = await response.json();
      const items = data.slice(0, 12);
      items.map((item) => {
        item.quantity = 1;
      });
      setProducts(items);
      setLoading(false);
    }
    fetchData();
  }, []);

  const reduce = (id) => {
    carrito.forEach((item) => {
      if (item.id === id) {
        item.quantity === 1 ? (item.quantity = 1) : (item.quantity -= 1);
      }
      setCarrito([...carrito]);
    });
  };
  const increase = (id) => {
    carrito.forEach((item) => {
      if (item.id === id) {
        item.quantity += 1;
      }
      setCarrito([...carrito]);
    });
  };

  const addCarrito = (id) => {
    let item = products.find((i) => i.id == id);
    if (carrito.includes(item)) {
      increase(item.id);
    } else {
      setCarrito([...carrito, item]);
    }

    notify();
  };

  const removeProducto = (id) => {
    if (window.confirm("¿Quieres suspender el producto?")) {
      carrito.forEach((item, index) => {
        if (item.id === id) {
          item.quantity = 1;
          carrito.splice(index, 1);
        }
      });
      setCarrito([...carrito]);
    }
  };

  useEffect(() => {
    const getTotal = () => {
      const res = carrito.reduce((prev, item) => {
        return prev + item.price * item.quantity;
      }, 0);
      setTotal(res);
    };
    getTotal();
  }, [carrito]);

  useEffect(() => {
    const getSize = () => {
      const res = carrito.reduce((prev, item) => {
        return prev + item.quantity;
      }, 0);
      setSize(res);
    };
    getSize();
  }, [carrito]);

  return (
    <DataContext.Provider
      value={{
        products,
        loading,
        addCarrito,
        carrito,
        total,
        reduce,
        increase,
        removeProducto,
        onOpenModal,
        onCloseModal,
        open,
        setCarrito,
        size,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
