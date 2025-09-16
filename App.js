import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import './styles.css';

const products = [
  { id:1, title:'Produto 1', price:10, rating:5, tag:'Novo', image:'https://via.placeholder.com/300' },
  { id:2, title:'Produto 2', price:20, rating:4, tag:'Promo', image:'https://via.placeholder.com/300' },
  { id:3, title:'Produto 3', price:15, rating:3, tag:'Novo', image:'https://via.placeholder.com/300' },
  { id:4, title:'Produto 4', price:25, rating:5, tag:'Promo', image:'https://via.placeholder.com/300' },
  { id:5, title:'Produto 5', price:12, rating:4, tag:'Novo', image:'https://via.placeholder.com/300' },
  { id:6, title:'Produto 6', price:18, rating:5, tag:'Promo', image:'https://via.placeholder.com/300' },
];

function App() {
  const [theme, setTheme] = useState('light');
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) setTheme(savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <div className={`app ${theme}`}>
      <Navbar theme={theme} toggleTheme={toggleTheme} cartCount={cartCount} />
      <main className="grid">
        {products.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </main>
    </div>
  );
}

export default App;