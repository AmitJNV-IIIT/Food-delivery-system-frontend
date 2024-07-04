import React from 'react';

const Payment = () => {
  const handlePayment = () => {
    alert('Payment successful! Order confirmed.');
  };

  return (
    <div>
      <button onClick={handlePayment}>Make Payment</button>
    </div>
  );
};

export default Payment;
