/**
 * Container component renders children inside a div with max width and auto margins.
 * Used as a layout container throughout the app.
 */
import React, { Children } from "react";

function Container() {
  return <div className="w-full max-w-7xl mx-auto px-4">{Children}</div>;
}

export default Container;
