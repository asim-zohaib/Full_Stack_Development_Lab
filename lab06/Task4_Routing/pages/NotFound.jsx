// pages/NotFound.jsx
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div style={pageStyle}>
      <div style={{ fontSize: "80px" }}>😵</div>
      <h1 style={{ fontSize: "72px", margin: "0", color: "#e63946" }}>404</h1>
      <h2>Page Not Found</h2>
      <p style={{ color: "gray", maxWidth: "400px" }}>
        Oops! The page you are looking for does not exist or has been moved.
      </p>
      <Link to="/" style={homeBtn}>
        🏠 Go Back Home
      </Link>
    </div>
  );
}

const pageStyle = {
  textAlign: "center",
  padding: "80px 20px",
  fontFamily: "Arial, sans-serif",
};

const homeBtn = {
  display: "inline-block",
  marginTop: "20px",
  padding: "12px 24px",
  backgroundColor: "#4a6cf7",
  color: "white",
  borderRadius: "8px",
  textDecoration: "none",
  fontSize: "16px",
};

export default NotFound;
