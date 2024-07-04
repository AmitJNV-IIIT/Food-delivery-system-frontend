import React, { useState } from 'react';
import './login.css';

const Register = ({ onRegister }) => {
  const [userDetails, setUserDetails] = useState({ username: '',email:'', password: '' });

  const handleChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(userDetails);
  };

  return (
   <div>
     <form onSubmit={handleSubmit}>
       <div className='r1'><input name="username" value={userDetails.username} onChange={handleChange} placeholder="fullname" /></div>
      <div className='r1'><input name="email" value={userDetails.email} onChange={handleChange} placeholder="email" /></div>
      <div className='r1'><input name="password" value={userDetails.password} onChange={handleChange} type="password" placeholder="Password" /></div>
      <div className='r1'><button type="submit">Register</button></div>
    </form>
   </div>
  );
};

export default Register;
