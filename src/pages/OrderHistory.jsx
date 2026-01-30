import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Navbar from "../components/Navbar";

function OrderHistory() {
  const { orders, clearOrders } = useContext(AuthContext);

  return (
    <>
      <Navbar />
      <div className="page">
        <h1>Order History</h1>

        {orders.length === 0 && <p>No orders found</p>}

        {orders.length > 0 && (
          <button onClick={clearOrders}>Clear Order History</button>
        )}

        {orders.map((order) => (
          <div className="card" key={order.id}>
            <p>ID: {order.id}</p>
            <p>Date: {order.date}</p>
            <p>Total: ₹{order.total}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default OrderHistory;
