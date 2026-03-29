import { useState } from "react";

function Actions() {
  const [message, setMessage] = useState("");
  const [bgColor, setBgColor] = useState("#ffffff");
  const [textColor, setTextColor] = useState("#000000");

  const colors = ["#ffadad", "#ffd6a5", "#fdffb6", "#caffbf", "#9bf6ff", "#bdb2ff"];

  function handleShowMessage() {
    setMessage("🎉 Hello! You clicked the Show Message button!");
  }

  function handleChangeBackground() {
    const random = colors[Math.floor(Math.random() * colors.length)];
    setBgColor(random);
  }

  function handleShowAlert() {
    alert("🚀 Alert! This is a React Event Handling Demo!");
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: bgColor,
        transition: "background-color 0.4s ease",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Arial, sans-serif",
        padding: "40px",
      }}
    >
      <h1 style={{ color: textColor }}>Interactive Buttons App</h1>
      <p style={{ color: "gray" }}>Hover over buttons to change text color. Click to trigger events.</p>

      <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center", marginTop: "20px" }}>

        {/* Button 1 - Show Message */}
        <button
          onClick={handleShowMessage}
          onMouseOver={() => setTextColor("#4a6cf7")}
          onMouseOut={() => setTextColor("#000000")}
          style={btnStyle("#4a6cf7")}
        >
          💬 Show Message
        </button>

        {/* Button 2 - Change Background */}
        <button
          onClick={handleChangeBackground}
          onMouseOver={() => setTextColor("#e63946")}
          onMouseOut={() => setTextColor("#000000")}
          style={btnStyle("#e63946")}
        >
          🎨 Change Background
        </button>

        {/* Button 3 - Show Alert */}
        <button
          onClick={handleShowAlert}
          onMouseOver={() => setTextColor("#2a9d8f")}
          onMouseOut={() => setTextColor("#000000")}
          style={btnStyle("#2a9d8f")}
        >
          🔔 Show Alert
        </button>
      </div>

      {message && (
        <div
          style={{
            marginTop: "30px",
            padding: "16px 24px",
            backgroundColor: "white",
            borderRadius: "10px",
            fontSize: "18px",
            boxShadow: "0 2px 12px rgba(0,0,0,0.1)",
            color: textColor,
          }}
        >
          {message}
        </div>
      )}
    </div>
  );
}

function btnStyle(color) {
  return {
    padding: "12px 22px",
    backgroundColor: color,
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    cursor: "pointer",
    transition: "transform 0.1s",
  };
}

export default Actions;
