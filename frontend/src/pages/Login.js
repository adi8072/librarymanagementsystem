import { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

function Login() {
  const [data, setData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/auth/login", data);
      localStorage.setItem("token", res.data.token);
      navigate("/dashboard");
    } catch (err) {
      console.log("ERROR:", err.response?.data);
      alert(err.response?.data?.msg || "Login failed");
    }
  };

  return (
    <div>
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
        <br /><br />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />
        <br /><br />

        <button type="submit">Login</button>
      </form>

      <p>
        Don't have an account? <a href="/register">Register</a>
      </p>
    </div>
  );
}

export default Login;