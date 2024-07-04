import React, { useEffect } from 'react';


const Logout = () => {
  
    
    useEffect(() => {
        
        const timer = setTimeout(() => {
           
            localStorage.removeItem('ordered');
            localStorage.removeItem('cart');
            localStorage.removeItem('token');

        
            alert("You have been logged out");

        
            window.location.href = '/';
        }, 1000); 

        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            <p>Logging out...</p>
        </div>
    );
};

export default Logout;
