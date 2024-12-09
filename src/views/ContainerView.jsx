import React from "react";
import { Outlet } from "react-router-dom";
import NavComponent from "../components/NavComponent";
export default function ContainerView() {
  return (
    <div>
      <h1>React-Router</h1>
      <NavComponent />
      <Outlet />
    </div>
  );
}
