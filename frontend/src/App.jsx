import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/hello")
      .then((res) => setMessage(res.data.message))
      .catch((err) => setMessage("Error fetching API"));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>🌟 MERN CI/CD Test App 🌟</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
