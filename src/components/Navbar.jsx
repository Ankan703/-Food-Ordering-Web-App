import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";

function Navbar() {
  const { cart } = useContext(CartContext);
  const { user, logout } = useContext(AuthContext);

  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        height: "60px",
        background: "#0f0f0f",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 20px",
        borderBottom: "1px solid #222",
        zIndex: 1000,
        flexWrap: "wrap"
      }}
    >
      {/* LOGO */}
      <h2 style={{ margin: 0 }}>
        <Link to="/">MOMO’s Hut</Link>
      </h2>

      {/* NAV LINKS */}
      <div
        style={{
          display: "flex",
          gap: "16px",
          alignItems: "center",
          flexWrap: "wrap",
          justifyContent: "flex-end"
        }}
      >
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>

        {/* CART WITH BADGE */}
        <Link to="/cart" style={{ position: "relative" }}>
          Cart
          {totalItems > 0 && (
            <span
              className="badge"
              style={{
                position: "absolute",
                top: "-8px",
                right: "-12px",
                background: "#e23744",
                borderRadius: "50%",
                padding: "2px 7px",
                fontSize: "12px",
                color: "#fff",
                fontWeight: "bold"
              }}
            >
              {totalItems}
            </span>
          )}
        </Link>

        <Link to="/order-history">Orders</Link>
        <Link to="/admin">Admin</Link>

        {/* LOGIN / LOGOUT */}
        {user ? (
          <span
            onClick={logout}
            style={{ cursor: "pointer" }}
          >
            Logout
          </span>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
