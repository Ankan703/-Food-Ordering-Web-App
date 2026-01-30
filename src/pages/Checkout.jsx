import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";
import Navbar from "../components/Navbar";

function Checkout() {
  const { cart, clearCart } = useContext(CartContext);
  const { user, addOrder } = useContext(AuthContext);

  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);

  const placeOrder = () => {
    const order = {
      id: Date.now(),
      items: cart,
      total,
      date: new Date().toLocaleString(),
    };
    addOrder(order);
    clearCart();
    window.location.href = "/order-history";
  };

  return (
    <>
      <Navbar />
      <div className="page">
        <h1>Checkout</h1>

        {cart.map((item, index) => (
          <div className="card" key={index}>
            {item.name} × {item.qty} = ₹{item.price * item.qty}
          </div>
        ))}

        <h2>Total: ₹{total}</h2>

        <div className="card">
          <h3>UPI Payment</h3>
          <p>🟢 Google Pay & 🟣 PhonePe</p>
        </div>

        <button onClick={placeOrder}>Pay via UPI & Order</button>
      </div>
    </>
  );
}

export default Checkout;
