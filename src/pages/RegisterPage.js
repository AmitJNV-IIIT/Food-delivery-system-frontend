import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { Link } from 'react-router-dom';
import Register from '../components/Auth/Register';
import axios from 'axios'; 

const RegisterPage = () => {
  const [error, setError] = useState('');
  const navigate = useNavigate(); 

  const handleRegister = async (userDetails) => {
    try {
     
      const response = await axios.post('http://localhost:8081/auth/register', userDetails);

     
      console.log('Registration successful:', response.data);

      localStorage.setItem('token', response.data.token);

      
      navigate('/Home');
    } catch (err) {
      console.error('Registration failed:', err);
      setError('Registration failed. Please try again.');
    }
  };

  return (
    <div className="auth-page">
      <h1>Register</h1>
      {error && <p className="error">{error}</p>}
      <Register onRegister={handleRegister} />
    </div>
  );
};

export default RegisterPage;
