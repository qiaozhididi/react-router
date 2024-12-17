import React from "react";
import { Link, Navigate } from "react-router-dom";

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
  const items = [
    {
      id: 1,
      name: "Item1",
    },
    {
      id: 2,
      name: "Item2",
    },
    {
      id: 3,
      name: "Item3",
    },
  ];
  return (
    <div>
      <h1>首页</h1>
      {/* {count > 0 ? count : <Navigate to="/user" />} */}
      {items.map((item) => (
        <div key={item.id}>
          <h3>
            <Link to={`/ItemViews/${item.name}`}>{item.name}</Link>
          </h3>
        </div>
      ))}
      <Link to={{ pathname: "/user", search: `user=${"qzfrato"}` }}>用户</Link>
    </div>
  );
}
