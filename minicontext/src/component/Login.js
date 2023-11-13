import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";
import { PassContext } from "../context/UserContext";

/**
 * A component for user login.
 */
function Login() {
  const [username, setUsername] = useState(""); // State for the username
  const [password, setPassword] = useState(""); // State for the password

  const { setUser } = useContext(UserContext); // Context for setting the user
  const { setPass } = useContext(PassContext); // Context for setting the password

  /**
   * Handles the form submission.
   *
   * @returns {void} - No return value.
   */
  const handleSubmit = () => {
    // handle form submission logic here
    setUser({ username }); // Set the user using the context
    setPass({ password }); // Set the password using the context
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        name="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <input
        type="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Login;
/**
 * Renders a login form and handles form submission logic.
 *
 * @return {JSX.Element} The rendered login form.
 */


