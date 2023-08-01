import React from 'react';
import './NavBar.css';

const NavBar = () => {
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
    </div>
  );
};

export default NavBar;
