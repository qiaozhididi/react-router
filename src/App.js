import React from "react";
import { BrowserRouter, Routes, Route, RouterProvider, HashRouter } from "react-router-dom";
import Container from "./OldRouter/Container";
import Home from "./OldRouter/Home";
import About from "./OldRouter/About";
import NavComponent from "./OldRouter/NavComponent";
import router from "./RouteStyle/index";
function App() {
  return (
    <div className="App">
      {/* 老版本 */}
      {/* <HashRouter basename="app">
        <NavComponent />
        <Routes path="/" element={<Container />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </HashRouter> */}

      {/* 新版本 */}
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
