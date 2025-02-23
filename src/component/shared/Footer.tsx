import { Layout, Row, Col, Typography } from "antd";
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Footer } = Layout;
const { Title, Text } = Typography;

const AppFooter = () => {
  return (
    <Footer style={{ backgroundColor: "#001529", color: "white", padding: "40px 20px" }}>
      <Row gutter={[32, 32]} justify="center">
        {/* Logo & Description */}
        <Col xs={24} sm={12} md={6}>
          <Title level={3} style={{ color: "white" }}>BikeShop</Title>
          <Text style={{ color: "#ccc" }}>
            Your one-stop shop for premium bikes and accessories.
          </Text>
        </Col>

        {/* Quick Links */}
        <Col xs={24} sm={12} md={6}>
          <Title level={4} style={{ color: "white" }}>Quick Links</Title>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li><Link to="/" style={{ color: "#ccc" }}>Home</Link></li>
            <li><Link to="/products" style={{ color: "#ccc" }}>Products</Link></li>
            <li><Link to="/dashboard" style={{ color: "#ccc" }}>Dashboard</Link></li>
            <li><Link to="/about" style={{ color: "#ccc" }}>About Us</Link></li>
            <li><Link to="/contact" style={{ color: "#ccc" }}>Contact</Link></li>
          </ul>
        </Col>

        {/* Contact & Support */}
        <Col xs={24} sm={12} md={6}>
          <Title level={4} style={{ color: "white" }}>Support</Title>
          <Text style={{ color: "#ccc" }}>Email: support@bikeshop.com</Text><br />
          <Text style={{ color: "#ccc" }}>Phone: +1 234 567 890</Text><br />
          <Text style={{ color: "#ccc" }}>Address: 123 Bike St, City, Country</Text>
        </Col>

        {/* Social Media Icons */}
        <Col xs={24} sm={12} md={6}>
          <Title level={4} style={{ color: "white" }}>Follow Us</Title>
          <div style={{ fontSize: "20px" }}>
            <Link to="#" style={{ color: "#ccc", marginRight: "15px" }}>
              <FacebookOutlined />
            </Link>
            <Link to="#" style={{ color: "#ccc", marginRight: "15px" }}>
              <TwitterOutlined />
            </Link>
            <Link to="#" style={{ color: "#ccc" }}>
              <InstagramOutlined />
            </Link>
          </div>
        </Col>
      </Row>
    </Footer>
  );
};

export default AppFooter;
