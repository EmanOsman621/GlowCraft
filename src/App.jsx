<<<<<<< HEAD
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/temporary/Navbar";
import Footer from "./components/temporary/Footer";
import Login from "./Eman/Login";
import Contact from "./Eman/Contact";
import IngredientTracker from "./pages/IngredientTracker/IngredientTracker";
import Wishlist from "./pages/Wishlist/Wishlist";
import Compare from "./pages/Compare/Compare";
import TempProducts from "./pages/Temp/TempProducts";
import "./App.css";

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/tracker" element={<IngredientTracker />} />
          <Route path="/tracker/:id" element={<IngredientTracker />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/compare" element={<Compare />} />
          <Route path="/products" element={<TempProducts />} />
          <Route path="/products/:id" element={<TempProducts />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
// export default App;
=======
import React, { useState } from 'react';
import { ThemeProvider } from './ThemeContext';
import Navbar from './Navbar';
import AllProductsPage from './AllProductsPage';
import SingleProductPage from './SingleProductPage';

export default function App() {
  const [activePage, setActivePage] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);

  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
    setActivePage('single');
  };

  const handleAddToCart = (product, quantity) => {
    setCart(prev => [...prev, { ...product, quantity }]);
    alert('Product added to cart successfully!');
  };

  return (
    <ThemeProvider>
      <div className="app">
        <Navbar 
          activePage={activePage} 
          setActivePage={setActivePage} 
          cartCount={cart.reduce((acc, item) => acc + item.quantity, 0)} 
        />
        
        {activePage === 'all' && (
          <AllProductsPage onSelectProduct={handleSelectProduct} />
        )}
        
        {activePage === 'single' && (
          <SingleProductPage 
            product={selectedProduct} 
            onBack={() => setActivePage('all')} 
            onAddToCart={handleAddToCart} 
          />
        )}
      </div>
    </ThemeProvider>
  );
}
>>>>>>> origin/hager-products
