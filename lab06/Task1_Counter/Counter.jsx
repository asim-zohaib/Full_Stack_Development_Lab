import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount(count + 1);
  }

  function handleDecrement() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  function handleReset() {
    setCount(0);
  }

  return (
    <div style={{ textAlign: "center", padding: "40px", fontFamily: "Arial, sans-serif" }}>
      <h1>Counter Application</h1>
      <h2 style={{ fontSize: "60px", color: count === 0 ? "gray" : "blue" }}>
        {count}
      </h2>
      <p style={{ color: "gray" }}>
        {count === 0 ? "Count cannot go below 0" : `Current Count: ${count}`}
      </p>

      <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <button
          onClick={handleIncrement}
          style={buttonStyle("green")}
        >
          ➕ Increment
        </button>

        <button
          onClick={handleDecrement}
          disabled={count === 0}
          style={buttonStyle(count === 0 ? "gray" : "red")}
        >
          ➖ Decrement
        </button>

        <button
          onClick={handleReset}
          style={buttonStyle("orange")}
        >
          🔄 Reset
        </button>
      </div>
    </div>
  );
}

function buttonStyle(color) {
  return {
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: color,
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  };
}

export default Counter;
