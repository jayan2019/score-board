import React from "react";
import { Layout } from "antd";
import { Outlet } from "react-router-dom";

const { Content } = Layout;

const layoutStyle: React.CSSProperties = {
  height: "100vh",
};

const MainLayout = () => {
  return (
    <Layout style={layoutStyle}>
      <Content>
        <p>Main Layout</p>
        <Outlet />
      </Content>
    </Layout>
  );
};

export default MainLayout;
