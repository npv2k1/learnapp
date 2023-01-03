import React, { useState } from "react";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import Link from "next/link";
import { UrlObject } from "url";
import { useRouter } from "next/router";

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  onSelect?: (key: React.Key) => void
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const MenuLink = (href: string | UrlObject) => {
  return <Link href={href} />;
};

const items: MenuItem[] = [
  getItem("page1", "page1", <PieChartOutlined />),
  getItem("page2", "page2", <PieChartOutlined />),
  getItem("page3", "page3", <PieChartOutlined />),
  getItem("page4", "page4", <PieChartOutlined />),
  getItem("page5", "page5", <DesktopOutlined />),
];

const AdminLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const router = useRouter();

  const handleMenuClick = (key: React.Key) => {
    router.push(`/${key}`);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div
          style={{
            height: 32,
            margin: 16,
            background: "rgba(255, 255, 255, 0.2)",
          }}
        />
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          onClick={(item) => handleMenuClick(item.key)}
          items={items}
        />
      </Sider>
      <Layout className="site-layout">
        <Header style={{ padding: 0 }} />
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          {children}
        </Content>
        <Footer style={{ textAlign: "center" }}></Footer>
      </Layout>
    </Layout>
  );
};

export const getAdminLayout = (page: React.ReactNode) => (
  <AdminLayout>{page}</AdminLayout>
);

export default AdminLayout;
