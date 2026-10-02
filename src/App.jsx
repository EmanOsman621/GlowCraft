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