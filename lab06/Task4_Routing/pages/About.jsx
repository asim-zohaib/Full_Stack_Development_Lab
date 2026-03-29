// pages/About.jsx
function About() {
  return (
    <div style={pageStyle}>
      <h1>📖 About Us</h1>
      <p style={{ fontSize: "17px", maxWidth: "600px", lineHeight: "1.8" }}>
        We are a passionate team of developers dedicated to building modern,
        user-friendly web applications using cutting-edge technologies like{" "}
        <strong>React JS</strong>, Node.js, and more.
      </p>
      <div style={cardContainer}>
        <div style={card}>
          <h3>🎯 Our Mission</h3>
          <p>Deliver high-quality, scalable web solutions.</p>
        </div>
        <div style={card}>
          <h3>👁️ Our Vision</h3>
          <p>Empower businesses through smart digital products.</p>
        </div>
        <div style={card}>
          <h3>💡 Our Values</h3>
          <p>Innovation, integrity, and collaboration.</p>
        </div>
      </div>
    </div>
  );
}

const pageStyle = {
  textAlign: "center",
  padding: "40px 20px",
  fontFamily: "Arial, sans-serif",
};

const cardContainer = {
  display: "flex",
  justifyContent: "center",
  gap: "16px",
  flexWrap: "wrap",
  marginTop: "30px",
};

const card = {
  width: "180px",
  padding: "20px",
  backgroundColor: "#fff7e6",
  borderRadius: "10px",
  border: "1px solid #ffd591",
  boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
};

export default About;
