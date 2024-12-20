import React from "react";
import {
  createSearchParams,
  Link,
  useParams,
  useLocation,
} from "react-router-dom";

export default function HomeView() {
  // const params = useParams();
  const location = useLocation();
  // console.log(params);
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
      {/* <Link to={{ pathname: "/user", search: `user=${"qzfrato"}` }}>用户</Link> */}
      {/* <Link
        to={{
          pathname: "/user",
          search: `${createSearchParams({ user: "qzfrato" })}`,
        }}
      >
        用户
      </Link> */}
      <Link to="/user" state={{ user: "qzfrato" }}>
        用户
      </Link>
      <h3>当前用户：{location.state.username}</h3>
    </div>
  );
}
