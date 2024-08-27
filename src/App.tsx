import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./LoginPage";
import "./App.css";
import SignUpPage from "./SignUpPage";
import HomePage from "./HomePage";

function App() {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            currentUser ? (
              <Navigate to="/home" replace />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        <Route
          path="/home"
          element={
            currentUser ? (
              <HomePage currentUser={currentUser} />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        <Route
          path={"/login"}
          element={<LoginPage setCurrentUser={setCurrentUser} />}
        />
        <Route path={"/signup"} element={<SignUpPage />} />
      </Routes>
    </div>
  );
}

export default App;
