import React from "react";
import { useParams } from "react-router-dom";

export default function ItemViews() {
  const params = useParams();
  console.log(params);
  return (
    <div>
      <h1>Item {params.content}</h1>
    </div>
  );
}
