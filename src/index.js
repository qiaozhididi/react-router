import React from "react";
import ReactDOM from "react-dom/client";
import router from "./router/index";
import Loadding from "./views/Loadding";
import {
  BrowserRouter,
  Outlet,
  Route,
  Routes,
  Link,
  RouterProvider,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <BrowserRouter> */}
    {/* <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="user" element={<User />}></Route>
        </Route>
      </Routes> */}
    <RouterProvider router={router} fallbackElement={<Loadding></Loadding>} />
    {/* </BrowserRouter> */}
  </React.StrictMode>
);

/**
 * 路由页面切换
 */
// function App() {
//   return (
//     <div>
//       <h1>React-Router</h1>
//       <div>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/about">About</Link>
//           </li>
//           <li>
//             <Link to="/user">User</Link>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// }

/**
 * 路由配置
 */
// function Home() {
//   return <h1>Home</h1>;
// }
// function About() {
//   return <h1>About</h1>;
// }
// function User() {
//   return <h1>User</h1>;
// }
