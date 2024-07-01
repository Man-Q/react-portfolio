import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import "./App.css"; // Import your custom CSS for global styles

const App = () => {
  return (
    <Router>
      <div className="bg-gray-200 min-h-screen">
        <Navbar />
        <div className="container mx-auto py-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project" element={<Projects />} />
            <Route path="/blog" element={<About />} />
            <Route exact path="/" element={<Contacts/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
