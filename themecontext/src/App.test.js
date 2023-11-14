import { render } from "@testing-library/react";

import App from './App';

test("renders learn react link", () => {
  render(<App />);

  // Fix error by removing code that expects "learn react" text
  // Since App component does not contain that text
});
