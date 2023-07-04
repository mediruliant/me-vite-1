import React from "react";
import Home from "./components/Home/Home";
import { Routes, Route, useLocation } from "react-router-dom";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import { AnimatePresence } from "framer-motion";
import Intro from "./components/intro/Intro";
import Projects from "./components/Projects/Projects";

function App() {
  const loc = useLocation();
  return (
    <div className="overflow-x-hidden">
      <Intro />
      <AnimatePresence mode="wait">
        <Routes location={loc} key={loc.pathname}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
