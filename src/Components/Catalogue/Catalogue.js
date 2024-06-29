

import React from 'react';
import './Catalogue.css';

function Catalog() {
  const products = [
    { id: 1, name: 'Book', price: 'Rs.100', image: 'https://media.istockphoto.com/id/173015527/photo/a-single-red-book-on-a-white-surface.jpg?s=612x612&w=0&k=20&c=AeKmdZvg2_bRY2Yct7odWhZXav8CgDtLMc_5_pjSItY=' },
    { id: 2, name: 'Dress', price: 'Rs.1200', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrp-EweBBxnAy3aW2mmy9ehXiG-4DTNLkDEA&s' },
    { id: 3, name: 'Water Bottle', price: 'Rs.150', image: 'https://t4.ftcdn.net/jpg/00/04/52/55/360_F_4525555_jOV1LfMBSqSrUfcqL1uJy2yDPS0Doe7O.jpg' },
    { id: 4, name: 'Blanket', price: 'Rs.500', image: 'https://4.imimg.com/data4/WY/AL/MY-22245997/double-ply-mink-blankets.jpg' },
    { id: 5, name: 'Umbrella', price: 'Rs.200', image: 'https://media.istockphoto.com/id/866721702/photo/blue-umbrella.jpg?s=612x612&w=0&k=20&c=LSfuo5Wx9tjPRUeyGktlBcA7rY2Nm6zdxS4xH4Vh8ng=' },
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



