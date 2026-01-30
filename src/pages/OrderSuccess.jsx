import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function OrderSuccess() {
  return (
    <>
      <Navbar />

      <div
        style={{
          minHeight: "100vh",
          background: "#111",
          color: "#fff",
          padding: "120px 60px",
          textAlign: "center"
        }}
      >
        <h1 style={{ color: "#4CAF50" }}>🎉 Order Placed Successfully!</h1>

        <p style={{ marginTop: "20px", fontSize: "18px" }}>
          Thank you for ordering from <strong>MOMO’s Hut</strong>.
        </p>

        <p style={{ marginTop: "10px", color: "#ccc" }}>
          You will receive updates and delivery details on Zomato.
        </p>

        <div style={{ marginTop: "40px" }}>
          <Link
            to="/menu"
            style={{
              padding: "12px 24px",
              background: "#e23744",
              color: "#fff",
              textDecoration: "none",
              borderRadius: "8px",
              marginRight: "15px"
            }}
          >
            Order More
          </Link>

          <Link
            to="/"
            style={{
              padding: "12px 24px",
              background: "#333",
              color: "#fff",
              textDecoration: "none",
              borderRadius: "8px"
            }}
          >
            Back to Home
          </Link>
        </div>
      </div>
    </>
  );
}

export default OrderSuccess;
