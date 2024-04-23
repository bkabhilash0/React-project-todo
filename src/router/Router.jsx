import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import ProjectPage from "../pages/ProjectPage";
import TodoPage from "../pages/TodoPage";
import LoginPage from "../pages/LoginPage";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <ProjectPage />,
      },
      {
        path: "/projects/:id",
        element: <TodoPage />,
      },
    ],
  },
  {
    path: "auth/",
    element: <Layout />,
    children: [
      {
        path: "login",
        element: <LoginPage />,
      },
      // {
      //   path: "/register",
      //   element: <RegisterPage />,
      // },
    ],
  },
]);

export default Router;
