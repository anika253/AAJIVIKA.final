import Map from "./components/map.jsx";
import Navbar from "./components/navbar.jsx";
import Footer from "./components/footer.jsx";
import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import Form from "./components/form.jsx";
import Register from "./components/register.jsx";
import HierForm from "./components/hierForm.jsx";
import React, { useEffect, useState } from "react";
import { auth } from "./firebase.config.js";
import Login from "./components/login.jsx";

function App() {
  const [user, setUser] = useState();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  });
  return (
    <div className="flex flex-col min-h-screen font-sans antialiased">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Map />} />
          <Route exact path="/form" element={<Form />} />
          <Route exact path="/login" element={user?<Navigate to="/admin"/>:<Login />} />
          <Route exact path="/register" element={user?<Navigate to="/admin"/>:<Register />} />
          <Route exact path="/admin" element={<HierForm/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

