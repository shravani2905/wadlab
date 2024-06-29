

import React from 'react';
import './Catalogue.css';

function Catalog() {
  const products = [
    { id: 1, name: 'Product 1', price: 'Rs.100', image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Product 2', price: 'Rs.120', image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Product 3', price: 'Rs.150', image: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Product 4', price: 'Rs.180', image: 'https://via.placeholder.com/150' },
    { id: 5, name: 'Product 5', price: 'Rs.200', image: 'https://via.placeholder.com/150' },
  ];

  return (
    <div className="catalog">
      {products.map(product => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.price}</p>
          <button className='addtocart bg-success'>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default Catalog;



