import React, { useState, useEffect } from 'react';
import './style.css';

const Cart = () => {
  const [cartData, setCartData] = useState(() => {
    const storedCartData = localStorage.getItem('cart');
    return storedCartData ? JSON.parse(storedCartData) : [];
  });

  const [quantity, setQuantity] = useState({});

  useEffect(() => {
    const quantities = {};
    cartData.forEach((item) => {
      quantities[item.title] = 1;
    });
    setQuantity(quantities);
  }, [cartData]);

  const handleQuantityChange = (event, title) => {
    const newQuantity = { ...quantity };
    newQuantity[title] = parseInt(event.target.value);
    setQuantity(newQuantity);
  };

  const handleRemoveItem = (title) => {
    const newCartData = cartData.filter((item) => item.title !== title);
    localStorage.setItem('cart', JSON.stringify(newCartData));
    setCartData(newCartData);
  };

  const calculateTotal = () => {
    let total = 0;
    cartData.forEach((item) => {
      total += item.realPrice * quantity[item.title];
    });
    return total;
  };

  return (
    <div className="cart">
      <table>
        <thead>
          <tr>
            <th>Products</th>
            <th>Title</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {cartData.map((item) => (
            <tr key={item.title}>
              <td>
                <img alt={item.title} height="50" src={item.image} width="50" />
              </td>
              <td>{item.title}</td>
              <td>${item.discPrice}</td>
              <td>
                <input
                  min="1"
                  style={{ width: '50px' }}
                  type="number"
                  value={quantity[item.title]}
                  onChange={(event) => handleQuantityChange(event, item.title)}
                />
              </td>
              <td>${item.realPrice * quantity[item.title]}</td>
              <td>
                <i
                  className="fas fa-trash-alt"
                  onClick={() => handleRemoveItem(item.title)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="summary">
        <h2>Summary</h2>
        <p>
          Subtotal:
          <span>${calculateTotal()}</span>
        </p>
        <p>
          Shipping Fee:
          <span>Free</span>
        </p>
        <p className="total">
          Total:
          <span>${calculateTotal()}</span>
        </p>
        <button className="checkout-btn">Checkout</button>
      </div>
     
    </div>
  );
};

export default Cart;





