
import React from 'react';
import './Cart.css';

function Cart() {
  const cartItems = [
    { id: 1, name: 'Product 1', price: 'Rs.100', quantity: 1, image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Product 2', price: 'Rs.223', quantity: 3, image: 'https://via.placeholder.com/150' },
  ];

 
  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="cart-items">
          {cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div className="item-details">
                <h3>{item.name}</h3>
                <p>Price: {item.price}</p>
                <p>Quantity: {item.quantity}</p>
              </div>
            </div>
          ))}
          <div className="cart-total">
            
            <button className="checkout">Proceed to Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;

