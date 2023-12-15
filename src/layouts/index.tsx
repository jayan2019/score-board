import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { Layout, Menu, MenuProps, Button, Typography, Switch } from "antd";
import { HomeOutlined, FileAddOutlined, MenuOutlined } from "@ant-design/icons";

import { changeTheme } from "../app/configSlice";

const { Title } = Typography;
const { Content, Header } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  { key: "home", label: <Link to="/">Home</Link>, icon: <HomeOutlined /> },
  {
    key: "add-score",
    icon: <FileAddOutlined />,
    label: <Link to="/add">Add Score</Link>,
  },
];

const MainLayout = () => {
  const dispatch = useDispatch();
  const [collapsed, setCollapsed] = useState(true);

  return (
    <Layout style={layoutStyle}>
      <Header style={{ paddingLeft: 0, display: "flex", alignItems: "center" }}>
        <div style={{ display: "flex", width: "100%" }}>
          <div style={buttonContainerStyle}>
            <Button
              type="primary"
              icon={<MenuOutlined />}
              onClick={() => setCollapsed((v) => !v)}
            />
          </div>
          <Title level={4} style={{ marginBottom: 0, color: "white" }}>
            SCORE BOARD
          </Title>
        </div>

        <Switch
          defaultChecked
          checkedChildren="Light"
          unCheckedChildren="Dark"
          onChange={(v) => dispatch(changeTheme(v ? "LIGHT" : "DARK"))}
        />
      </Header>
      <Content style={{ display: "flex" }}>
        <Menu
          mode="inline"
          items={items}
          inlineCollapsed={collapsed}
          style={{ maxWidth: "200px" }}
          defaultSelectedKeys={["home"]}
        />
        <Outlet />
      </Content>
    </Layout>
  );
};

export default MainLayout;

const layoutStyle: React.CSSProperties = {
  height: "100vh",
};

const buttonContainerStyle: React.CSSProperties = {
  width: "75px",
  display: "flex",
  justifyContent: "center",
};
