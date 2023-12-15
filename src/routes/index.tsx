import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts";

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <div>Home</div> },
      { path: "/add", element: <div>Add</div> },
    ],
  },
]);
