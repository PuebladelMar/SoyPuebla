import React, { useState } from 'react';
import ProductsNav from './ProductsNav';
import { NavLink } from 'react-router-dom';
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
        placeholder='BUSCAR'
        onChange={''}
      />
      <button className='navbar-button'>BUSCAR</button>
      <button
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className='navbar-button-products'
      >
        PRODUCTOS {showMenu && <ProductsNav />}
      </button>
      <NavLink to='/login'>
        <button className='navbar-button'>REGISTRATE</button>
      </NavLink>

      <NavLink to='/cart'>
        <button className='navbar-button'>CARRITO</button>
      </NavLink>
    </div>
  );
};

export default NavBar;
