import { useState } from "react";
import { Routes, Route, Router, Navigate } from "react-router-dom";
import SignInPage from "./SignInPage";
import SignUpPage from "./SignUpPage";
import HomePage from "./HomePage";
import LandingPage from "./LandingPage";
//import "./css/App.css";

function App() {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  return (
    <Routes>
      <Route
        path="/"
        element={
          currentUser ? <HomePage currentUser={currentUser} /> : <LandingPage />
        }
      />
      <Route
        path={"/signin"}
        element={<SignInPage setCurrentUser={setCurrentUser} />}
      />
      <Route path={"/signup"} element={<SignUpPage />} />
    </Routes>
  );
}

export default App;
