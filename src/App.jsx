import React from "react";
import HomePage from "./pages/home/Home"; // Rename the function to HomePage
import Topbar from "./Components/Topbar/Topbar";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Single from "./pages/Single/Single";
import Settings from "./pages/settings/Settings";
import Write from "./pages/write/Write";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const user = false;

  return (
    <Router>
      <Topbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Conditionally render Home or Login based on user */}
        <Route path="/login" element={user ? <HomePage /> : <Login />} />
        {/* Conditionally render Home or Register based on user */}
        <Route path="/register" element={user ? <HomePage /> : <Register />} />
        {/* Always render Single for /single */}
        <Route path="/single" element={<Single />} />
        {/* Conditionally render Settings or Register based on user */}
        <Route path="/settings" element={user ? <Settings /> : <Register />} />
        {/* Conditionally render Write or Register based on user */}
        <Route path="/write" element={user ? <Write /> : <Register />} />
        {/* Always render Single for /post/:postId */}
        <Route path="/post/:postId" element={<Single />} />
      </Routes>
    </Router>
  );
}

export default App;
