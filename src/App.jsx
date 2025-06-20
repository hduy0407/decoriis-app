import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from './pages/About.jsx'
import More from './pages/More.jsx'
import Design from "./pages/Design.jsx";
import Factory from "./pages/Factory.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import ContactSection from "./pages/Contact.jsx";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/more" element={<More />} />
          <Route path="/design" element={<Design />} />
          <Route path="/factory" element={<Factory />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<ContactSection />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
