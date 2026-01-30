import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);

  return (
    <>
      <Navbar />
      <div className="page">
        <h1>Your Cart</h1>

        {cart.length === 0 && <p>No items in cart</p>}

        {cart.map((item, index) => (
          <div className="card" key={index}>
            <h3>{item.name}</h3>
            <p>
              ₹{item.price} × {item.qty}
            </p>
            <button onClick={() => removeFromCart(item.name)}>
              Remove
            </button>
          </div>
        ))}

        {cart.length > 0 && (
          <>
            <h2>Total: ₹{total}</h2>
            <button onClick={() => navigate("/checkout")}>
              Proceed to Checkout
            </button>
          </>
        )}
      </div>
    </>
  );
}

export default Cart;
