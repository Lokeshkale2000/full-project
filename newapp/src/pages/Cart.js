import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Cart.css';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const userId = localStorage.getItem('userId'); // Retrieve user ID from localStorage
        if (!userId) {
          setError('User not logged in.');
          setLoading(false);
          return;
        }

        const response = await axios.get(`http://localhost:8080/api/cart`);
        setCartItems(response.data.items);
      } catch (error) {
        console.error('Error fetching cart items:', error);
        setError('Failed to fetch cart items.');
      } finally {
        setLoading(false);
      }
    };

    fetchCartItems();
  }, []);

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="cart-container">
      <h1 className="Cart_title">Your Cart</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              cartItems.map(item => (
                <div className="cart-item" key={item.productId}>
                  <img src={item.img} alt={item.title} className="cart-item-img" />
                  <div className="cart-item-details">
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                    <p className="cart-item-price">Price: ${item.price}</p>
                    <p className="cart-item-quantity">
                      Quantity: {item.quantity}
                    </p>
                  </div>
                </div>
              ))
            )}
          </div>
          <div className="total-price">Total Price: ${calculateTotalPrice()}</div>
        </>
      )}
    </div>
  );
};

export default Cart;
