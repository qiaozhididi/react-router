//路由配置
import { createBrowserRouter } from "react-router-dom";
import ContainerView from "../views/ContainerView";
import HomeView from "../views/HomeView";
import UserView from "../views/UserView";
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <ContainerView />,
      children: [
        {
          path: "/Home",
          element: <HomeView />,
        },
        {
          path: "/user",
          element: <UserView />,
        },
      ],
    },
  ],
  {
    basename: "/app2",
  }
);

export default router;
