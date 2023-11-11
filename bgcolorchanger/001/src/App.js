import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [color, setcolor] = useState("pink"); // hook set karo

  const getcolor = (color) => {
    //hook ki value loo through const as a variable
    setcolor(color); // hook ki value set karo state mai through arrow function
  };

  return (
    <div
      style={{ color, height: "100vh", transition: "background-color 0.5s" }}
    >
      <button onClick={() => getcolor("#ffcc00")}>Change to Yellow</button>
      <button onClick={() => getcolor("#00ffcc")}>Change to Green</button>
      <button onClick={() => getcolor("#cc00ff")}>Change to Purple</button>

      <p>this is paragraph</p>
    </div> // variable ke function ki value pass karo
  );
}
