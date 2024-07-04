import React, { useState } from 'react';
import './login.css';
const Login = ({ onLogin }) => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(credentials);
  };

  return (
   <div className='r0'>
    <form onSubmit={handleSubmit}>
      <div className='r1'><input name="email" value={credentials.email} onChange={handleChange} placeholder="Email" /></div>
      <div className='r1'><input name="password" value={credentials.password} onChange={handleChange} type="password" placeholder="Password" /></div>
      <div className='r1'><button type="submit">Login</button></div>
    </form>
   </div>
  );
};

export default Login;
