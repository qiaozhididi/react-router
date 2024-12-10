//路由配置
import { createBrowserRouter,createHashRouter } from "react-router-dom";
import ContainerView from "../views/ContainerView";
import HomeView from "../views/HomeView";
import UserView from "../views/UserView";
const router = createHashRouter(
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
