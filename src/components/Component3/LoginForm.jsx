import { useState } from "react";
import "./LoginForm.css";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = () => {
    if (username.trim() !== "" && password.trim() !== "") {
      setMessage("Login Successful");
    } else {
      setMessage("Please enter username and password");
    }
  };

  return (
    <div className="login-card">
      <h2>Login Form</h2>

      <div className="form-group">
        <label>Username:</label>

        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter username"
        />
      </div>

      <div className="form-group">
        <label>Password:</label>

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
        />
      </div>

      <button onClick={handleLogin}>Login</button>

      {message && <p className="login-message">{message}</p>}
    </div>
  );
}

export default LoginForm;