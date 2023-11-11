import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [backgroundColor, setBackgroundColor] = useState("lightblue");

  const changeBackground = (color) => {
    setBackgroundColor(color);
  };

  return (
    <div
      style={{ backgroundColor, height: "100vh", transition: "background-color 0.5s" }}
    >
      <button onClick={() => changeBackground("#ffcc00")} className="orange" id="orange">
        Change to Yellow
      </button>
      <button onClick={() => changeBackground("#00ffcc")}>
        Change to Green
      </button>
      <button onClick={() => changeBackground("#cc00ff")}>
        Change to Purple
      </button>
    </div>
  );
}
