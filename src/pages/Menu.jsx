import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Navbar from "../components/Navbar";

const menuItems = [
  { name: "Steam Momos (6 pcs)", price: 50 },
  { name: "Fried Momos (6 pcs)", price: 60 },
  { name: "Pan Fried Momos (6 pcs)", price: 100 },
  { name: "Kurkura Momos (7 pcs)", price: 100 },
  { name: "Chicken Pakoda (4 pcs)", price: 60 },
  { name: "Chicken Kurkura (100 gms)", price: 60 },
  { name: "Chicken Drumstick (1 pc)", price: 70 },
  { name: "Fish Fry (1 pc)", price: 60 },
  { name: "Fish Finger (2 pcs)", price: 50 },
  { name: "Garlic Chicken (6 pcs)", price: 100 },
  { name: "Chicken Pasta (1 plate)", price: 100 }
];

function Menu() {
  const { addToCart } = useContext(CartContext);

  return (
    <>
      <Navbar />

      <div
        style={{
          minHeight: "100vh",
          background: "#111",
          color: "#fff",
          padding: "100px 60px"
        }}
      >
        <h1>Our Menu</h1>

        <div
          style={{
            marginTop: "30px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "20px"
          }}
        >
          {menuItems.map((item, index) => (
            <div
              key={index}
              style={{
                background: "#1c1c1c",
                padding: "20px",
                borderRadius: "10px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              <div>
                <strong>{item.name}</strong>
                <div style={{ color: "#ccc", marginTop: "5px" }}>
                  ₹{item.price}
                </div>
              </div>

              <button
                style={{
                  background: "#e23744",
                  color: "#fff",
                  border: "none",
                  padding: "8px 14px",
                  borderRadius: "6px",
                  cursor: "pointer"
                }}
                onClick={() => addToCart(item)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Menu;
