import React, { useState } from 'react';
import ProductsNav from './ProductsNav';
import './NavBar.css';

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMouseEnter = () => {
    setShowMenu(true);
  };

  const handleMouseLeave = () => {
    setShowMenu(false);
  };

  return (
    <div className='navbar'>
      <form onSubmit={''} />

      <input
        className='search-input'
        type='text'
        placeholder='Buscar'
        onChange={''}
      />
      <button className='navbar-button'>Buscar</button>
      <button
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className='navbar-button'
      >
        Products {showMenu && <ProductsNav />}
      </button>
    </div>
  );
};

export default NavBar;
