import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

interface SignInPageProps {
  setCurrentUser: (user: User | null) => void;
}

function mapUser(response: any): User {
  return {
    displayName: response.username,
    habits: response.habits,
  };
}

const SignInPage: React.FC<SignInPageProps> = ({ setCurrentUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/user/login", {
        username,
        password,
      });
      // Assuming login is successful, redirect to dashboard or handle token storage
      console.log("Login successful!", response.data);
      const currentUser = mapUser(response.data);
      console.log(currentUser);
      setCurrentUser(currentUser);
      navigate("/");
    } catch (error) {
      console.error("Login failed:", error);
      // Handle login failure, show error message to user
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
        <p>
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </form>
    </div>
  );
};

export default SignInPage;
