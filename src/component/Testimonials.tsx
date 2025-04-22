import { Card, Typography, Avatar, Row, Col } from "antd";
import { motion } from "framer-motion";

const { Title, Text } = Typography;

const testimonials = [
  {
    name: "John Doe",
    review:
      "Amazing quality bikes! The service was exceptional, and delivery was super fast.",
    image: "https://i.pravatar.cc/150?img=3",
  },
  {
    name: "Sarah Smith",
    review:
      "Fantastic experience! The ordering process was seamless, and the bike exceeded my expectations.",
    image: "https://i.pravatar.cc/150?img=5",
  },
  {
    name: "Michael Brown",
    review:
      "Highly recommended! The customer support team was very helpful and guided me through the purchase.",
    image: "https://i.pravatar.cc/150?img=8",
  },
];

const Testimonials = () => {
  return (
    <section style={{ background: "#f5f5f5", padding: "50px 20px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
        <Title level={2} style={{ marginBottom: "30px" }}>What Our Customers Say</Title>
        <Row gutter={[24, 24]} justify="center">
          {testimonials.map((testimonial, index) => (
            <Col xs={24} sm={12} md={8} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card style={{ textAlign: "center", borderRadius: "10px" }}>
                  <Avatar src={testimonial.image} size={64} style={{ marginBottom: "15px" }} />
                  <Text italic>"{testimonial.review}"</Text>
                  <Title level={4} style={{ marginTop: "10px" }}>- {testimonial.name}</Title>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default Testimonials;
