import React from 'react';

const Navbar = ({ theme, toggleTheme, cartCount }) => {
  return (
    <nav className="navbar">
      <div className="logo">Loja</div>
      <button
        onClick={toggleTheme}
        aria-label="Toggle theme"
        className="theme-toggle"
      >
        {theme === 'light' ? '🌞' : '🌙'}
      </button>
      <div className="cart-badge" aria-label={`Carrinho com ${cartCount} itens`}>
        🛒 {cartCount}
      </div>
    </nav>
  );
};

export default Navbar;