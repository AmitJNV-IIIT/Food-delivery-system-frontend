import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Cart from './Cart';

describe('Cart Component', () => {
  const cartItems = [
    { id: 1, name: 'Pizza', price: 9.99 },
    { id: 2, name: 'Burger', price: 4.99 },
  ];

  const placeOrderMock = jest.fn();
  const clearCartMock = jest.fn();
  const removeFromCartMock = jest.fn();

  test('renders Cart items correctly', () => {
    const { getByText } = render(
      <Cart 
        cartItems={cartItems} 
        placeOrder={placeOrderMock} 
        clearCart={clearCartMock} 
        removeFromCart={removeFromCartMock} 
      />
    );

    expect(getByText('Pizza')).toBeInTheDocument();
    expect(getByText('Price: Rs 9.99')).toBeInTheDocument();
    expect(getByText('Burger')).toBeInTheDocument();
    expect(getByText('Price: Rs 4.99')).toBeInTheDocument();
  });

  test('handles remove from cart correctly', () => {
    const { getByText } = render(
      <Cart 
        cartItems={cartItems} 
        placeOrder={placeOrderMock} 
        clearCart={clearCartMock} 
        removeFromCart={removeFromCartMock} 
      />
    );

    fireEvent.click(getByText('Remove'));

    expect(removeFromCartMock).toHaveBeenCalledWith(cartItems[0].id);
  });

  test('handles place order correctly', () => {
    const { getByText } = render(
      <Cart 
        cartItems={cartItems} 
        placeOrder={placeOrderMock} 
        clearCart={clearCartMock} 
        removeFromCart={removeFromCartMock} 
      />
    );

    fireEvent.click(getByText('Place Order'));

    expect(placeOrderMock).toHaveBeenCalled();
  });

  test('handles clear cart correctly', () => {
    const { getByText } = render(
      <Cart 
        cartItems={cartItems} 
        placeOrder={placeOrderMock} 
        clearCart={clearCartMock} 
        removeFromCart={removeFromCartMock} 
      />
    );

    fireEvent.click(getByText('Clear Cart'));

    expect(clearCartMock).toHaveBeenCalled();
  });
});