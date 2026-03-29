// pages/Home.jsx
function Home() {
  return (
    <div style={pageStyle}>
      <h1>🏠 Welcome to Our Website</h1>
      <p style={{ fontSize: "18px", maxWidth: "600px", lineHeight: "1.7" }}>
        This is the home page of our multi-page React application. We use{" "}
        <strong>React Router</strong> to navigate between pages without
        reloading the browser.
      </p>
      <div style={featureBox}>
        <h3>✅ What you can do here:</h3>
        <ul style={{ textAlign: "left", lineHeight: "2" }}>
          <li>Browse our Products</li>
          <li>Learn About Us</li>
          <li>Contact our Team</li>
        </ul>
      </div>
    </div>
  );
}

const pageStyle = {
  textAlign: "center",
  padding: "40px 20px",
  fontFamily: "Arial, sans-serif",
};

const featureBox = {
  display: "inline-block",
  marginTop: "20px",
  padding: "20px 40px",
  backgroundColor: "#f0f4ff",
  borderRadius: "10px",
  border: "1px solid #c5d0ff",
};

export default Home;
