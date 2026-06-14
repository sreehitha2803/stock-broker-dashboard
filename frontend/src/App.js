import React, { useState } from "react";
import Login from "./Login";
import Dashboard from "./Dashboard";

function App() {
  const [email, setEmail] = useState("");

  return (
    <div>
      {email ? (
        <Dashboard email={email} />
      ) : (
        <Login onLogin={setEmail} />
      )}
    </div>
  );
}

export default App;