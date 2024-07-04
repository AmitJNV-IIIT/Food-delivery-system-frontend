import React, { useState, useEffect } from 'react';
import Cart from "../components/Order/Cart";
import Header from '../components/Header/Header';
import Payment from '../components/Payment/Payment';
import axios from 'axios';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [paymentComplete, setPaymentComplete] = useState(false);
  const [cartSize,setCartSize]=useState(0);

  const fetchCartSize = async () => {
    try {
      const response = await axios.get('http://localhost:8082/api/cart/cartQuantity'); 
      console.log(" call at fetch cart",response.data)
      setCartSize(response.data);
    } catch (error) {
      console.error('Failed to fetch cart items size:', error);
    }
  };

 
  useEffect(() => {

    const fetchCartItems = async () => {
      try {
        const response = await axios.get('http://localhost:8082/api/cart/all'); 
        setCartItems(response.data);
      } catch (error) {
        console.error('Failed to fetch cart items:', error);
      }
    };

    fetchCartItems();
    fetchCartSize();
  }, []);

  
  const placeOrder = async (cartItems) => {
    try {
      
      alert('Proceeding to payment...');
      
      setTimeout(async () => {
        const response = await axios.post('http://localhost:8082/api/orders', { cartItems }); 
        if (response.status === 201) {
          setPaymentComplete(true);
          alert('Payment successful! Order confirmed.');
          clearCart();
        } else {
          alert('Payment failed. Please try again.');
        }
      }, 1000);
    } catch (error) {
      console.error('Failed to place order:', error);
      alert('Payment failed. Please try again.');
    }
  };


  const clearCart = async () => {
    try {
      await axios.delete('http://localhost:8082/api/cart'); 
    } catch (error) {
      console.error('Failed to clear cart:', error);
    }
  };


  const removeFromCart = async (itemId) => {
    try {
      const response = await axios.delete(`http://localhost:8082/api/cart/${itemId}`); 
      if (response.status === 200) {
        setCartItems(cartItems.filter(item => item.id !== itemId));
      }
    } catch (error) {
      console.error('Failed to remove item from cart:', error);
    }


    fetchCartSize();
  };

  return (
    <>
      <Header />
      <div>
        <h1>Shopping Cart</h1><button>Cart Quantity: {cartSize}</button>
        {cartItems.length > 0 ? (
          <>
            <Cart cartItems={cartItems} placeOrder={placeOrder} removeFromCart={removeFromCart} clearCart={clearCart}/>
            {paymentComplete && <Payment />}
          </>
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
    </>
  );
};

export default CartPage;
