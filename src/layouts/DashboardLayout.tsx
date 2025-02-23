import { Layout, Menu, Spin } from "antd";
import { Link, Outlet } from "react-router-dom";
import {
  DashboardOutlined,
  ShoppingCartOutlined,
  AppstoreOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const { Header, Sider, Content } = Layout;

const DashboardLayout = () => {
  const { user, loading } = useSelector((state: RootState) => state.auth);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Spin size="large" />
      </div>
    );
  }

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider collapsible>
        <div className="logo" style={{ color: "white", textAlign: "center", padding: "16px" }}>
          Bike Shop
        </div>
        <Menu theme="dark" mode="inline">
          <Menu.Item key="1" icon={<DashboardOutlined />}>
            <Link to="/dashboard">Dashboard</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<ShoppingCartOutlined />}>
            <Link to="/dashboard/orders">Orders</Link>
          </Menu.Item>
          {/* Admin-Only Items */}
          {user?.role === "admin" && (
            <>
              <Menu.Item key="3" icon={<AppstoreOutlined />}>
                <Link to="/dashboard/products">Manage Products</Link>
              </Menu.Item>
              <Menu.Item key="4" icon={<UserOutlined />}>
                <Link to="/dashboard/users">Manage Users</Link>
              </Menu.Item>
            </>
          )}
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ background: "#fff", padding: 0, textAlign: "center" }}>
          <h2>Dashboard</h2>
        </Header>
        <Content style={{ margin: "16px" }}>
          <Outlet /> 
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
