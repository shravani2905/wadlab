
import React from 'react';
import './Cart.css';

function Cart() {
  const cartItems = [
    { id: 1, name: 'Book', price: 'Rs.100', quantity: 1, image: 'https://media.istockphoto.com/id/173015527/photo/a-single-red-book-on-a-white-surface.jpg?s=612x612&w=0&k=20&c=AeKmdZvg2_bRY2Yct7odWhZXav8CgDtLMc_5_pjSItY=' },
    { id: 2, name: 'Umbrella', price: 'Rs.200', quantity: 3, image: 'https://media.istockphoto.com/id/866721702/photo/blue-umbrella.jpg?s=612x612&w=0&k=20&c=LSfuo5Wx9tjPRUeyGktlBcA7rY2Nm6zdxS4xH4Vh8ng=' },
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
            
            <button className="checkout">Buy now</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;

