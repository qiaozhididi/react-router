import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import ContainerView from "../views/ContainerView";
import HomeView from "../views/HomeView";
import UserView from "../views/UserView";

const routes = createRoutesFromElements(
  <Route path="/" element={<ContainerView />}>
    <Route index element={<HomeView />}></Route>
    <Route path="/user" element={<UserView />}></Route>
  </Route>
);
const router = createBrowserRouter(routes, {
  basename: "/app3",
});

export default router;
