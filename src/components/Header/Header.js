import React from 'react';
import '../../common.css';
import { Link } from 'react-router-dom';

const Header = () => {
 
  return (
   <div className='header'>
     <span><button><Link to="/Home" className="home-link">Home</Link></button></span>
    <span><button><Link to="/catalog" className="home-link">Browse Catalog</Link></button></span>
    <span><button><Link to="/cart" className="home-link">Go to Cart</Link></button></span>
    <span><button><Link to="/order" className="home-link">Order Status</Link></button></span>
    <span><button><Link to="/logout" className="home-link">Logout</Link></button></span>
   </div>
  );
};

export default Header;
