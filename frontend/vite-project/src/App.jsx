import React from "react";
import Home from "./home/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import Course from "./components/Course";
import Signup from "./components/Signup";
import "./App.css";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./Context/AuthProvider";
import Contact from "./components/Contact";

function App() {
  const { authUser } = useAuth();

  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/course"
            element={authUser ? <Course /> : <Navigate to="/signup" />}
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;
