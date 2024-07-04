import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route,Navigate  } from 'react-router-dom';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import CatalogPage from './pages/CatalogPage';
import CartPage from './pages/CartPage';
import OrderStatusPage from './pages/OrderStatusPage';
import Logout from './pages/LogOut';

const PrivateRoute = ({ element }) => {
  const token = localStorage.getItem('token');
  return token ? element : <Navigate to="/" />;
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      {/* Define your routes */}
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/Home" element={<PrivateRoute element={<Home />} />} />
      <Route path="/catalog" element={<PrivateRoute element={<CatalogPage />} />} />
      <Route path="/cart" element={<PrivateRoute element={<CartPage />} />} />
      <Route path="/order" element={<PrivateRoute element={<OrderStatusPage />} />} />
      <Route path="/logout" element={<PrivateRoute element={<Logout />} />} />
    </Routes>
  </BrowserRouter>
);


