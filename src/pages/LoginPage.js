import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import Login from '../components/Auth/Login';
import { Link } from 'react-router-dom';
import axios from 'axios'; 

const LoginPage = () => {
  const [error, setError] = useState('');
  const navigate = useNavigate(); 

  const handleLogin = async (credentials) => {
    console.log("token",localStorage.getItem('token'));
    try {
    
      const response = await axios.post('http://localhost:8081/auth/login', credentials);

      console.log('Login successful:', response.data);

      localStorage.setItem('token', response.data.token);

     
      navigate('/Home');
    } catch (err) {
      console.error('Login failed:', err);
      setError('Login failed. Please try again.');
    }
  };

  return (
    <div className="auth-page">
      <h1>Login</h1>
      {error && <p className="error">{error}</p>}
      <Login onLogin={handleLogin} />
      <button><Link to="/register" className="home-link">Register</Link></button>
    </div>
  );
};

export default LoginPage;
