import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const u = localStorage.getItem("user");
    const o = localStorage.getItem("orders");

    if (u) setUser(JSON.parse(u));
    if (o) setOrders(JSON.parse(o));
  }, []);

  const login = (email) => {
    const u = { email };
    setUser(u);
    localStorage.setItem("user", JSON.stringify(u));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  const addOrder = (order) => {
    const updated = [...orders, order];
    setOrders(updated);
    localStorage.setItem("orders", JSON.stringify(updated));
  };

  // 🧹 CLEAR ORDER HISTORY
  const clearOrders = () => {
    setOrders([]);
    localStorage.removeItem("orders");
  };

  return (
    <AuthContext.Provider
      value={{ user, login, logout, orders, addOrder, clearOrders }}
    >
      {children}
    </AuthContext.Provider>
  );
}
