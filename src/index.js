import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Outlet, Route, Routes,Link } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/user">User</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="user" element={<User />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

/**
 * 路由页面切换
 */
function App() {
  return (
    <div>
      <h1>React-Router</h1>
      {/* 路由嵌套 */}
      <Outlet></Outlet>
    </div>
  );
}

/**
 * 路由配置
 */
function Home() {
  return <h1>Home</h1>;
}
function About() {
  return <h1>About</h1>;
}
function User() {
  return <h1>User</h1>;
}
