//路由配置
import { createBrowserRouter } from "react-router-dom";
import App from "../views/App";
import HomeView from "../views/HomeView";
import UserView from "../views/UserView";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomeView />,
      },
      {
        path: "/user",
        element: <UserView />,
      },
    ],
  },
]);

export default router;