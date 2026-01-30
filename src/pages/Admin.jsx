import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

function Admin() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(saved);
  }, []);

  return (
    <>
      <Navbar />
      <div className="page">
        <h1>Admin Panel</h1>

        {orders.length === 0 && <p>No orders yet</p>}

        {orders.map((o) => (
          <div className="card" key={o.id}>
            <p>ID: {o.id}</p>
            <p>Total: ₹{o.total}</p>
            <p>Date: {o.date}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Admin;
