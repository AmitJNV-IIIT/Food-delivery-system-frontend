import React, { useEffect, useState } from 'react';
import axios from 'axios';

const OrderStatus = ({ orderId }) => {
  const [status, setStatus] = useState('');

  useEffect(() => {
    const fetchStatus = async () => {
      const res = await axios.get(`http://localhost:8082/api/orders`);
      setStatus(res.data.status);
    };
    fetchStatus();
  }, [orderId]);

  return <p>Order Status: Delivered</p>;
};

export default OrderStatus;


// const OrderStatus = ({ order }) => {
//   const [status, setStatus] = useState({});

//   useEffect(() => {
//     if (order) {
//       const statusMap = order.reduce((acc, item) => {
//         acc[item.id] = item.status;
//         return acc;
//       }, {});
//       setStatus(statusMap);
//     }
//   }, [order]);

//   return (
//     <div>
//       {order && order.length > 0 ? (
//         order.map(item => (
//           <div key={item.id}>
//             <h2>{item.name}</h2>
//             <p>Price: Rs {item.price}</p>
//             <p>Status: {status[item.id]}</p>
//           </div>
//         ))
//       ) : (
//         <p>No items in order.</p>
//       )}
//     </div>
//   );
// };

// export default OrderStatus;

