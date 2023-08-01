import React from 'react';
import './ProductsNav.css';

const ProductsNav = () => {
  const products = ['Top', 'Calza', 'Pants'];

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
