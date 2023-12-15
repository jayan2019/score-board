import React from "react";
import { ConfigProvider, theme } from "antd";

import { router } from "./routes";
import { useAppSelector } from "./app/hooks";
import { selectTheme } from "./app/configSlice";
import { RouterProvider } from "react-router-dom";
const { defaultAlgorithm, darkAlgorithm } = theme;

const App = () => {
  const sltdTheme = useAppSelector(selectTheme);

  return (
    <ConfigProvider
      theme={{
        algorithm: sltdTheme === "DARK" ? darkAlgorithm : defaultAlgorithm,
      }}
    >
      <RouterProvider router={router} />
    </ConfigProvider>
  );
};

export default App;
