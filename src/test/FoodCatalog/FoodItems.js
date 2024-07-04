import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import axios from 'axios';
import ItemList from './ItemList';

// Mock localStorage
const localStorageMock = (() => {
  let store = {};
  return {
    getItem: (key) => store[key] || null,
    setItem: (key, value) => {
      store[key] = value;
    },
    clear: () => {
      store = {};
    },
    removeItem: (key) => {
      delete store[key];
    }
  };
})();
Object.defineProperty(window, 'localStorage', { value: localStorageMock });

// Mock alert
window.alert = jest.fn();

// Mock axios
jest.mock('axios');

describe('FoodList Component', () => {
  afterEach(() => {
    jest.clearAllMocks();
    localStorage.clear();
  });

  test('renders ItemList with correct data', () => {
    const items = [
      { id: 1, name: 'Pizza', price: 9.99 },
      { id: 2, name: 'Burger', price: 5.99 },
    ];

    const { getByText } = render(<ItemList items={items} />);

    expect(getByText('Pizza')).toBeInTheDocument();
    expect(getByText('Price: Rs 9.99')).toBeInTheDocument();
    expect(getByText('Burger')).toBeInTheDocument();
    expect(getByText('Price: Rs 5.99')).toBeInTheDocument();
  });

  test('adds item to cart and calls API on button click', async () => {
    const items = [{ id: 1, name: 'Pizza', price: 9.99 }];
    const { getByText } = render(<ItemList items={items} />);

    
    localStorage.setItem('token', 'mock-token');

   
    axios.post.mockResolvedValue({ data: { message: 'Item added to server-side cart' } });

    const button = getByText('Add to Cart');
    fireEvent.click(button);

    expect(window.alert).toHaveBeenCalledWith('Pizza is added');

    const cart = JSON.parse(localStorage.getItem('cart'));
    expect(cart).toEqual([{ id: 1, name: 'Pizza', price: 9.99 }]);

    expect(axios.post).toHaveBeenCalledWith(
      'http://localhost:8082/api/cart/add',
      { id: 1, name: 'Pizza', price: 9.99 },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  });

  test('handles API error gracefully', async () => {
    const items = [{ id: 1, name: 'Pizza', price: 9.99 }];
    const { getByText } = render(<ItemList items={items} />);

  
    localStorage.setItem('token', 'mock-token');

    axios.post.mockRejectedValue(new Error('Network Error'));

    const button = getByText('Add to Cart');
    fireEvent.click(button);

    expect(window.alert).toHaveBeenCalledWith('Pizza is added');

    const cart = JSON.parse(localStorage.getItem('cart'));
    expect(cart).toEqual([{ id: 1, name: 'Pizza', price: 9.99 }]);

    expect(axios.post).toHaveBeenCalledWith(
      'http://localhost:8082/api/cart/add',
      { id: 1, name: 'Pizza', price: 9.99 },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  });
});