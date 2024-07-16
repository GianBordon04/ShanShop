import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/header/Header'; 
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import NotFound from "./components/NotFound";
import Carrito from './components/header/Carrito';
import Suma from './components/Suma';
import { CartProvider } from "./context/CartContext";
import { Checkout } from "./components/Checkout";
import { CargarProductos } from "./components/CargarProductos";
import Footer from "./components/Footer"; 
import './App.css';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Header />
        <div className="particles-container">
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
        </div>
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/suma" element={<Suma />} />
          <Route path="/finalizar-compra" element={<Checkout />} />
          <Route path="/cargar-productos" element={<CargarProductos />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
