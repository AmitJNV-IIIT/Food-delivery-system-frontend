// src/pages/OrderStatusPage.js

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import OrderStatus from '../components/Order/OrderStatus';
import Header from '../components/Header/Header';

const OrderStatusPage = () => {
  const { orderId } = useParams();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    // const fetchOrder = async () => {
    //   try {
    //     // Fetch order status from your API
    //     // Example: const response = await fetch(`/api/orders/${orderId}`);
    //     // const data = await response.json();
    //     const data = { id: orderId, status: 'Delivered' }; // Replace with actual API call
    //     setOrder(data);
    //   } catch (error) {
    //     console.error('Failed to fetch order status:', error);
    //   }
    // };
    // fetchOrder();

    const data = JSON.parse(localStorage.getItem('ordered'));
    setOrder(data);
  }, [orderId]);

  return (
    <>
    <Header/>
    <div className="order-status-page">
      <h1>Order Status</h1>
      {order ? <OrderStatus order={order} /> : <p>No Orders</p>}
    </div>
    </>
  );
};

export default OrderStatusPage;
