import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hobbies from "./pages/Hobbies";
import Header from "./components/Header";
import Projects from "./pages/Projects";
import HobbyPage from "./pages/Hobbypage";



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/hobbies" element={<Hobbies />} />
        <Route path="/hobbies/:id" element={<HobbyPage/>} />
      </Routes>
    </>
  );
}

export default App;
