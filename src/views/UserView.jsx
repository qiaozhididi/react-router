import React from "react";
import { useSearchParams } from "react-router-dom";

export default function UserView() {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div>
      <h1>用户</h1>
      <h2>用户ID：{searchParams.get("user")}</h2>
    </div>
  );
}
