// pages/Contact.jsx
import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit() {
    if (!form.name || !form.email || !form.message) {
      alert("Please fill in all fields.");
      return;
    }
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <div style={pageStyle}>
      <h1>📬 Contact Us</h1>
      <p>Have a question? We'd love to hear from you.</p>

      {submitted && (
        <div style={successBox}>
          ✅ Your message has been sent successfully!
        </div>
      )}

      <div style={formCard}>
        <label style={label}>Name</label>
        <input
          name="name"
          type="text"
          placeholder="Your name"
          value={form.name}
          onChange={handleChange}
          style={input}
        />

        <label style={label}>Email</label>
        <input
          name="email"
          type="email"
          placeholder="Your email"
          value={form.email}
          onChange={handleChange}
          style={input}
        />

        <label style={label}>Message</label>
        <textarea
          name="message"
          placeholder="Your message..."
          value={form.message}
          onChange={handleChange}
          rows={4}
          style={{ ...input, resize: "vertical" }}
        />

        <button onClick={handleSubmit} style={submitBtn}>
          Send Message
        </button>
      </div>
    </div>
  );
}

const pageStyle = {
  textAlign: "center",
  padding: "40px 20px",
  fontFamily: "Arial, sans-serif",
};

const formCard = {
  maxWidth: "420px",
  margin: "0 auto",
  padding: "24px",
  backgroundColor: "#f9f9f9",
  borderRadius: "12px",
  boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
  textAlign: "left",
};

const label = {
  display: "block",
  marginBottom: "4px",
  fontWeight: "bold",
  fontSize: "14px",
};

const input = {
  width: "100%",
  padding: "10px",
  marginBottom: "14px",
  borderRadius: "6px",
  border: "1px solid #ccc",
  fontSize: "15px",
  boxSizing: "border-box",
};

const submitBtn = {
  width: "100%",
  padding: "12px",
  backgroundColor: "#4a6cf7",
  color: "white",
  border: "none",
  borderRadius: "8px",
  fontSize: "16px",
  cursor: "pointer",
};

const successBox = {
  maxWidth: "420px",
  margin: "0 auto 20px",
  padding: "12px",
  backgroundColor: "#e6ffe6",
  border: "1px solid #a3d9a5",
  borderRadius: "8px",
  color: "#2d6a4f",
};

export default Contact;
