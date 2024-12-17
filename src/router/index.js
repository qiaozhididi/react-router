//路由配置
import { createBrowserRouter, createHashRouter } from "react-router-dom";
import ContainerView from "../views/ContainerView";
import HomeView from "../views/HomeView";
import UserView from "../views/UserView";
import ItemViews from "../views/ItemViews";
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
        {
          path: "/ItemViews/:content",
          element: <ItemViews />,
        },
      ],
    },
  ],
  {
    basename: "/app2",
  }
);

export default router;
