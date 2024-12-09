import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Container from "./OldRouter/Container";
import Home from "./OldRouter/Home";
import About from "./OldRouter/About";
import NavComponent from "./OldRouter/NavComponent";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavComponent />
        <Routes path="/" element={<Container />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
