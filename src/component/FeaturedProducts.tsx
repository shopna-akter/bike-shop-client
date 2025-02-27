import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Spin, Card, Row, Col, Tag, Typography } from "antd";

const { Title, Text } = Typography;

const FeaturedProducts = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`https://bike-shop-server-jade.vercel.app/api/products`);
        const data = await res.json();
        setProducts(data.data.slice(0, 6));
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <Spin size="large" />;

  if (products.length === 0) return <p>No products found!</p>;

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <Title style={{
        textAlign: "center",
        padding: "10px"
      }}level={2}>Featured Products</Title>
      <Row gutter={[16, 16]} justify="center">
        {products.map((product) => (
          <Col span={8} key={product._id}>
            <Card
              hoverable
              cover={<img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded-lg" />}
              title={<Title level={4}>{product.name}</Title>}
              extra={<Tag color={product.inStock ? "green" : "red"}>{product.inStock ? "In Stock" : "Out of Stock"}</Tag>}
            >
              <Row gutter={[16, 16]}>
                <Col span={24}>
                  <Text strong>Brand:</Text> {product.brand}
                </Col>
                <Col span={24}>
                  <Text strong>Price:</Text> ${product.price}
                </Col>
              </Row>
              <Row gutter={[16, 16]}>
                <Col span={24}>
                  <Button
                    type="primary"
                    block
                    disabled={product.quantity === 0}
                    onClick={() => navigate(`/checkout/${product._id}`)}
                  >
                    {product.quantity === 0 ? "Out of Stock" : "Buy Now"}
                  </Button>
                </Col>
              </Row>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Centered Button with Special Styling */}
      <div style={{ textAlign: "center", marginTop: 40 }}>
        <Button
          type="primary"
          size="large"
          onClick={() => navigate("/all-product")}
          style={{
            borderRadius: "50px",
            padding: "10px 30px",
            background: "linear-gradient(135deg, #ff6f61, #ff9c9c)",
            border: "none",
            fontSize: "18px",
            fontWeight: "bold",
            transition: "all 0.3s ease",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1)";
            e.currentTarget.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.2)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.1)";
          }}
        >
          View All Products
        </Button>
      </div>
    </div>
  );
};

export default FeaturedProducts;
