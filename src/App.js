import React from "react";
import Login from "./Login";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Trainings from "./pages/Trainings";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/Trainings" element={<Trainings />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
