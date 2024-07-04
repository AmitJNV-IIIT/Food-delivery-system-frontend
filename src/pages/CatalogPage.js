
import React, { useState, useEffect } from 'react';
import FoodList from '../components/FoodCatalog/FoodList';
import Header from '../components/Header/Header';

const CatalogPage = () => {


  return (
    <>
      <Header />
      <div className="catalog-page">
        <h1>Food Catalog</h1>
        {/* <FoodList items={foodItems} /> */}
      <FoodList/>
      </div>
    </>
  );
};

export default CatalogPage;

