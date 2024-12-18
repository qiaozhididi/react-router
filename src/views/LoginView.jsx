import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
export default function LoginView() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isLogin, setIsLogin] = React.useState(false);
  const navigate = useNavigate();

  const userNameChange = (e) => {
    setUsername(e.target.value);
  };
  const passwordChange = (e) => {
    setPassword(e.target.value);
  };
  const onLogin = (e) => {
    e.preventDefault();
    if (username === "qzfrato" && password === "123456") {
      // setIsLogin(true);
      // 通过js实现也页面跳转，变成编程式导航
      // navigate("/Home");
      //传参
      // navigate(`/Home/${username}`);
      // navigate("/Home", { search: `${createSearchParams({ user: "qzfrato" })}` });
      // navigate("/Home", { search: `user=${"qzfrato"}` });
      navigate("/Home", { state: { username } });
    }
  };
  return (
    <div>
      <h3>登录页</h3>
      <form onSubmit={onLogin}>
        用户名：
        <input type="text" value={username} onChange={userNameChange} />
        密码：
        <input type="password" value={password} onChange={passwordChange} />
        <button type="submit">登录</button>
      </form>
      {/* {isLogin ? <Navigate to="/Home" /> : null} */}
    </div>
  );
}
