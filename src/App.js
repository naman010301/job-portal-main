import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Dashboard from "./pages/Dashboard";
import JobDetail from "./pages/JobDetail";
import CandidateDetail from "./pages/CandidateDetail";
import Assignments from "./pages/Assignments";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/assignments" element={<Assignments />} />
        <Route path="/job/:jobId" element={<JobDetail />} />
        <Route path="/candidate/:candidateId" element={<CandidateDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
