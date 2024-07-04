import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ItemList = () => {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchFoodItems = async () => {
      try {
        const response = await axios.get('http://localhost:8082/api/food/catalog');
        setItems(response.data);
      } catch (error) {
        console.error('Failed to fetch food items:', error);
      }
    };
    fetchFoodItems();
  }, []);

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const response = await axios.get(`http://localhost:8082/api/food/search?search=${search}`);
        setItems(response.data);
      } catch (error) {
        console.error('Failed to search food items:', error);
      }
    };

    if (search !== "") {
      fetchSearchResults();
    } else {
      // Fetch all items if search is empty
      const fetchFoodItems = async () => {
        try {
          const response = await axios.get('http://localhost:8082/api/food/catalog');
          setItems(response.data);
        } catch (error) {
          console.error('Failed to fetch food items:', error);
        }
      };
      fetchFoodItems();
    }
  }, [search]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  }

  const addToCart = async (item) => {
    try {
      alert(`${item.name} is added`);
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      cart.push(item);
      localStorage.setItem('cart', JSON.stringify(cart));
      const response = await axios.post('http://localhost:8082/api/cart/add', item, {
        headers: { 'Content-Type': 'application/json' }
      });
      console.log('Item added to server-side cart:', response.data);
    } catch (error) {
      console.error('Error adding item to cart:', error);
      if (error.response) {
        console.error('Error response:', error.response.data);
      } else {
        console.error('Error message:', error.message);
      }
    }
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={search}
          onChange={handleSearch}
          placeholder="Search Your favorite meals"
        />
      </div>
      {items.map(item => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <p>Price: Rs {item.price}</p>
          <p>{item.description}</p>
          <button onClick={() => addToCart(item)}>Add to Cart</button>
          <br/><br/>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
