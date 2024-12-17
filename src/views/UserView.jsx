import React from "react";
import { useSearchParams, useLocation } from "react-router-dom";

export default function UserView() {
  // const [searchParams, setSearchParams] = useSearchParams();

  const location = useLocation();

  return (
    <div>
      <h1>用户</h1>
      {/* <h2>用户ID：{searchParams.get("user")}</h2> */}
      <h2>用户ID：{location.state.user}</h2>
    </div>
  );
}
