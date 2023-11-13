import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";
import { PassContext } from "../context/UserContext";
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);
  const { setPass } = useContext(PassContext);

  const handleSubmit = () => {
    // handle form submission logic here
    setUser({username})
    setPass({password})
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
