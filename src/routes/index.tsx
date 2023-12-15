import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/home";
import AddScore from "../pages/add";
import MainLayout from "../layouts";

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/add", element: <AddScore /> },
    ],
  },
]);
