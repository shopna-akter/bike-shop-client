import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button, Spin, Card, Row, Col, Tag, Statistic, Badge, Typography } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://bike-shop-server-jade.vercel.app/api/products/${id}`);
        const data = await res.json();
        setProduct(data.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <Spin size="large" />;

  if (!product) return <p>Product not found!</p>;

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <Card
        hoverable
        cover={
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-72 object-cover rounded-lg mb-4 shadow-md"
          />
        }
        title={<Title level={2}>{product.name}</Title>}
        extra={<Tag color={product.inStock ? "green" : "red"}>{product.inStock ? "In Stock" : "Out of Stock"}</Tag>}
      >
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <Text strong>Brand:</Text> {product.brand}
          </Col>
          <Col span={12}>
            <Text strong>Model:</Text> {product.bikeModel}
          </Col>
        </Row>

        <Row gutter={[16, 16]}>
          <Col span={12}>
            <Text strong>Category:</Text> {product.category}
          </Col>
          <Col span={12}>
            <Statistic
              title="Price"
              value={product.price}
              prefix="$"
              valueStyle={{ fontSize: 24, fontWeight: "bold", color: "#ff4d4f" }}
            />
          </Col>
        </Row>

        <Row gutter={[16, 16]}>
          <Col span={24}>
            <Text strong>Description:</Text>
            <Text>{product.description}</Text>
          </Col>
        </Row>

        <Row gutter={[16, 16]}>
          <Col span={12}>
            <Text strong>Availability:</Text>{" "}
            <Badge
              count={product.quantity}
              style={{
                backgroundColor: product.inStock ? "#52c41a" : "#f5222d",
                fontSize: 14,
                color: "#fff",
              }}
            />
          </Col>
          <Col span={12}>
            <Button
              type="primary"
              size="large"
              icon={<ShoppingCartOutlined />}
              block
              disabled={product.quantity === 0}
              onClick={() => navigate(`/checkout/${product._id}`)} // Use _id here
            >
              {product.quantity === 0 ? "Out of Stock" : "Buy Now"}
            </Button>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default ProductDetails;
