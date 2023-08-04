// import React from 'react';
import './ProductsNav.css';

const ProductsNav = () => {
  const products = ['TOPS', 'CALZAS', 'PANTS'];

  return (
    <div className='productos-menu'>
      <ul>
        {products.map((product, index) => (
          <li key={index}>{product}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsNav;
