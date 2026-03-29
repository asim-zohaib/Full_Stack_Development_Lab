import { useState } from "react";

function UserForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(null);

  function handleSubmit() {
    if (name.trim() === "" || email.trim() === "") {
      alert("Please fill in all fields.");
      return;
    }
    // Save submitted data
    setSubmitted({ name, email });
    // Clear input fields after submission
    setName("");
    setEmail("");
  }

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center" }}>User Form App</h1>

      <div style={cardStyle}>
        <h2>Enter Your Details</h2>

        <label style={labelStyle}>Name:</label>
        <input
          type="text"
          placeholder="Enter your name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={inputStyle}
        />

        <label style={labelStyle}>Email:</label>
        <input
          type="email"
          placeholder="Enter your email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
        />

        <button onClick={handleSubmit} style={submitBtnStyle}>
          Submit
        </button>
      </div>

      {submitted && (
        <div style={resultStyle}>
          <h3>✅ Submitted Data:</h3>
          <p><strong>Name:</strong> {submitted.name}</p>
          <p><strong>Email:</strong> {submitted.email}</p>
        </div>
      )}
    </div>
  );
}

const cardStyle = {
  background: "#f0f4ff",
  borderRadius: "10px",
  padding: "24px",
  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
};

const labelStyle = {
  display: "block",
  marginBottom: "4px",
  fontWeight: "bold",
};

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginBottom: "16px",
  borderRadius: "6px",
  border: "1px solid #ccc",
  fontSize: "15px",
  boxSizing: "border-box",
};

const submitBtnStyle = {
  width: "100%",
  padding: "12px",
  backgroundColor: "#4a6cf7",
  color: "white",
  border: "none",
  borderRadius: "8px",
  fontSize: "16px",
  cursor: "pointer",
};

const resultStyle = {
  marginTop: "20px",
  padding: "16px",
  backgroundColor: "#e6ffe6",
  borderRadius: "8px",
  border: "1px solid #a3d9a5",
};

export default UserForm;
