// src/pages/Home.js

import React from 'react';
import Header from '../components/Header/Header';
// import './Home.css';  
const Home = () => {
  return (
    <>
    <Header/>
     <div className="home">
      <header className="home-header">
        <h1>Welcome to Food Delivery System By Publicis Sapient</h1>
        <p className='z-10 text-red-50 text-xl  lg:text-4xl'>Perfect Taste: Food, Fast Delivery</p>
        <p>Your favorite meals delivered to your door.</p>
      </header>
    </div>
    </>
   
  );
};

export default Home;
