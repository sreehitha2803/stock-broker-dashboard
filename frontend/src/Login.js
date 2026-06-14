import React, { useState } from "react";

function Login({ onLogin }) {
  const [email, setEmail] = useState("");

  const handleLogin = () => {
    if (email.trim()) {
      onLogin(email);
    } else {
      alert("Please enter an email");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Login</h2>

      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{
          padding: "8px",
          width: "250px",
          marginRight: "10px"
        }}
      />

      <button onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}

export default Login;