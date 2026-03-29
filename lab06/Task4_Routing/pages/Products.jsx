// pages/Products.jsx
import { useState } from "react";

const productList = [
  { id: 1, title: "Wireless Headphones", description: "High-quality sound with noise cancellation.", price: "$49.99" },
  { id: 2, title: "Smart Watch", description: "Track your fitness and stay connected.", price: "$89.99" },
  { id: 3, title: "Laptop Stand", description: "Ergonomic aluminum stand for your laptop.", price: "$29.99" },
  { id: 4, title: "USB-C Hub", description: "7-in-1 hub with HDMI, USB, and SD card.", price: "$34.99" },
  { id: 5, title: "Mechanical Keyboard", description: "Tactile switches for a satisfying typing experience.", price: "$59.99" },
  { id: 6, title: "Webcam HD", description: "1080p webcam for crystal clear video calls.", price: "$39.99" },
];

function Products() {
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart([...cart, product]);
  }

  return (
    <div style={pageStyle}>
      <h1>🛒 Our Products</h1>
      <p>🛍️ Items in Cart: <strong>{cart.length}</strong></p>

      <div style={grid}>
        {productList.map((product) => (
          <div key={product.id} style={card}>
            <div style={emoji}>📦</div>
            <h3>{product.title}</h3>
            <p style={{ color: "#555", fontSize: "14px" }}>{product.description}</p>
            <p style={{ fontWeight: "bold", color: "#4a6cf7" }}>{product.price}</p>
            <button onClick={() => addToCart(product)} style={cartBtn}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

const pageStyle = {
  textAlign: "center",
  padding: "40px 20px",
  fontFamily: "Arial, sans-serif",
};

const grid = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "16px",
  marginTop: "20px",
};

const card = {
  width: "200px",
  padding: "20px",
  backgroundColor: "#fff",
  borderRadius: "12px",
  boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
  border: "1px solid #eee",
};

const emoji = {
  fontSize: "36px",
  marginBottom: "8px",
};

const cartBtn = {
  marginTop: "10px",
  padding: "8px 16px",
  backgroundColor: "#4a6cf7",
  color: "white",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  fontSize: "14px",
};

export default Products;
