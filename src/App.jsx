import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import ErrorPage from "./pages/Error404page";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import {DataContextProvider} from './context/ContextProvider';
import Cart from "./components/Cart";
import ScrollToTop from "react-scroll-to-top";


function App() {
  return (
    <DataContextProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/productos" element={<ProductsPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Cart/>
      <ScrollToTop smooth component={<p style={{ color: "blue" }}>UP</p>} />
    </DataContextProvider>
  );
}

export default App;
