import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import ProjectPage from "../pages/ProjectPage";
import TodoPage from "../pages/TodoPage";

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
]);

export default Router;
