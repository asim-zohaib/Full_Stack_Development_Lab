// App.jsx  (Task 4 - React Routing)
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import NotFound from "./pages/NotFound";

function Navbar() {
  const location = useLocation();

  const links = [
    { to: "/", label: "🏠 Home" },
    { to: "/about", label: "📖 About" },
    { to: "/products", label: "🛒 Products" },
    { to: "/contact", label: "📬 Contact Us" },
  ];

  return (
    <nav style={navStyle}>
      <span style={{ fontWeight: "bold", fontSize: "18px", color: "white" }}>
        MyWebsite
      </span>
      <div style={{ display: "flex", gap: "16px" }}>
        {links.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            style={{
              ...navLink,
              backgroundColor:
                location.pathname === link.to ? "#ffffff33" : "transparent",
            }}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div style={{ minHeight: "calc(100vh - 60px)" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

const navStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0 30px",
  height: "60px",
  backgroundColor: "#4a6cf7",
  position: "sticky",
  top: 0,
  zIndex: 100,
};

const navLink = {
  color: "white",
  textDecoration: "none",
  padding: "6px 12px",
  borderRadius: "6px",
  fontSize: "15px",
};

export default App;
