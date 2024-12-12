import React from "react";
import { Navigate } from "react-router-dom";

export default function HomeView() {
  //倒计时Navigate重定向跳转
  const [count, setCount] = React.useState(5);
  React.useEffect(() => {
    let timer = null;
    if (count > 0) {
      timer = setTimeout(() => {
        setCount(count - 1);
      }, 1000);
    } else {
      clearTimeout(timer);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [count]);
  return (
    <div>
      <h1>首页</h1>
      {count > 0 ? count : <Navigate to="/user" />}
    </div>
  );
}
