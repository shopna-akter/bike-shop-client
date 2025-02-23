import { Link, useNavigate } from "react-router-dom";
import { Button, Layout, Menu, Avatar } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/features/auth/authSlice";
import type { AppDispatch, RootState } from "../../redux/store";

const { Header } = Layout;

const Navbar = () => {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const { user } = useSelector((state: RootState) => state.auth);

    const handleLogout = () => {
        dispatch(logout()).then(() => {
            navigate("/login");
        });
    };
    console.log("Current User:", user);

    return (
        <Header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0 20px" }}>
            <div>
                <Link to="/">
                    <h2 style={{ color: "white", margin: 0 }}>BikeShop</h2>
                </Link>
            </div>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["home"]}>
                <Menu.Item key="home">
                    <Link to="/">Home</Link>
                </Menu.Item>
                <Menu.Item key="dashboard">
                    <Link to="/dashboard">Dashboard</Link>
                </Menu.Item>
                <Menu.Item key="all-product">
                    <Link to="/all-product">All Product</Link>
                </Menu.Item>
                <Menu.Item key="about">
                    <Link to="/about">About</Link>
                </Menu.Item>
            </Menu>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                {user ? (
                    <>
                        <Avatar style={{ backgroundColor: "#1890ff" }}>
                            {user.name ? user.name.charAt(0).toUpperCase() : "U"}
                        </Avatar>
                        <Button type="primary" onClick={handleLogout} danger>
                            Logout
                        </Button>
                    </>
                ) : (
                    <Link to="/login">
                        <Button type="primary">Login</Button>
                    </Link>
                )}
            </div>

        </Header>
    );
};

export default Navbar;
