import React from "react";
import { Link } from "react-router-dom";

export default function NavComponent() {
  return (
    <div>
      <div>导航</div>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/user">User</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
