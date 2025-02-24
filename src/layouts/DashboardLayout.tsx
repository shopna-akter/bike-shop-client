import { Layout, Menu } from "antd";
import { Link, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  DashboardOutlined,
  ShoppingCartOutlined,
  AppstoreOutlined,
  UserOutlined,
} from "@ant-design/icons";

const { Header, Sider, Content } = Layout;

const DashboardLayout = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const user = useSelector((state: any) => state.auth.user);
  const isAdmin = user?.role === "admin";
  const userName = user?.name;
  console.log("user", user);
  console.log("admin", isAdmin);

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

          {isAdmin ? (
            <>
              <Menu.Item key="2" icon={<ShoppingCartOutlined />}>
                <Link to="/dashboard/orders">Manage Orders</Link>
              </Menu.Item>
              <Menu.Item key="3" icon={<AppstoreOutlined />}>
                <Link to="/dashboard/products">Manage Products</Link>
              </Menu.Item>
              <Menu.Item key="4" icon={<UserOutlined />}>
                <Link to="/dashboard/users">Manage Users</Link>
              </Menu.Item>
            </>
          ) : (
            <Menu.Item key="5" icon={<ShoppingCartOutlined />}>
              <Link to="/dashboard/my-orders">My Orders</Link>
            </Menu.Item>
          )}
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ background: "#fff", padding: 0, textAlign: "center" }}>
          <h2>{userName ? `Welcome, ${userName}` : "Dashboard"}</h2>
        </Header>
        <Content style={{ margin: "16px" }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
