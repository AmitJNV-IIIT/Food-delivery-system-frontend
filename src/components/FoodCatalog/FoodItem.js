import React from 'react';

const FoodItem = ({ item }) => {
  console.log("item",item);
  
  return (
    <div>
      <h2>{item.name}</h2>
      <p>{item.description}</p>
      <p>Rs {item.price}</p>
      
    </div>
  );
};

export default FoodItem;
