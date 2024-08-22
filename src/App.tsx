import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./LoginPage";
import "./App.css";
import SignUpPage from "./SignUpPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={"/"} element={<LoginPage />} />
        <Route path={"/signup"} element={<SignUpPage />} />
      </Routes>
    </div>
  );
}

export default App;
