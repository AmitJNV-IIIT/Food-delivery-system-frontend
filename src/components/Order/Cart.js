import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Cart = ({ cartItems, placeOrder, removeFromCart, clearCart }) => {
  const [error, setError] = useState(null);
 // const [q, setQ] = useState(2);
  useEffect(() => {
    updateQuantity();
  },[]);


  const updateQuantity = async () => {
    try {
      // const response = await axios.put('http://localhost:8082/api/cart/cart');
      // // Handle the response as needed
      // console.log('Quantity updated', response.data);
      // setQ(response?.data);
    
    } catch (err) {
      console.error('Error updating quantity', err);
      setError('Failed to update quantity');
    }
  };

  return (
    <div>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      {cartItems.map(item => (
        <div key={item?.id}>
          <h2>{item?.name}</h2>
          <p>Price: Rs {item?.price}</p>
          {/* <p>Quantity: {item?.quantity}</p> */}
          {/* <input
            type="number"
            value={item?.quantity}
            onChange={(e) => updateQuantity(item?.id, e.target.value)}
          /> */}
          <button onClick={() => removeFromCart(item?.id)}>Remove</button>
        </div>
      ))}
      {/* <div><p>Quantity: {q}</p></div> */}
      <button onClick={() => placeOrder(cartItems)}>Place Order</button>
      <button onClick={clearCart}>Clear Cart</button>
    </div>
  );
};

export default Cart;
