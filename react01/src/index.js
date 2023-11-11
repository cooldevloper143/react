import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// function MyApp() {
//   return (
//     <div>
//       <h1>custom app !</h1>
//     </div>
//   )
// }

// const reactElement = React.createElement(
//   'a',
//   {
//     href: 'https://google.com',
//     target: '_blank'
//   },
//   'click me to visit google'
// );

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div>
      <App />
      {/* {reactElement} */}
    </div>
  </React.StrictMode>
);
