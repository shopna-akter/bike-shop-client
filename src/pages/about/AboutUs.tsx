import { Card, Typography, Row, Col, List } from "antd";

const { Title, Paragraph } = Typography;

const AboutUs = () => {
  return (
    <div style={{ maxWidth: "1200px", margin: "auto", padding: "40px" }}>
      <Title level={1} style={{ textAlign: "center", marginBottom: "40px" }}>
        About Us
      </Title>
      <Row gutter={[32, 32]}>
        <Col xs={24} md={12}>
          <Card hoverable>
            <Title level={2}>Our Mission</Title>
            <Paragraph>
              At BikeWorld, our mission is to provide high-quality bicycles and
              accessories to cycling enthusiasts of all levels. We are dedicated
              to promoting a healthier and more sustainable lifestyle through
              cycling. Our goal is to create a community where riders can find
              the best products, expert guidance, and a passion for adventure
              on two wheels.
            </Paragraph>
          </Card>
          <Card hoverable style={{ marginTop: "20px" }}>
            <Title level={2}>Our Vision</Title>
            <Paragraph>
              We envision a world where cycling is more than just
              transportation—it’s a way of life. We aim to inspire individuals
              to explore the outdoors, embrace fitness, and reduce their carbon
              footprint by choosing bikes over cars. Through innovation and
              commitment, we strive to make cycling accessible to everyone.
            </Paragraph>
          </Card>
        </Col>
        <Col xs={24} md={12}>
          <Card hoverable>
            <Title level={2}>Our Values</Title>
            <List
              bordered
              dataSource={[
                "Passion for Cycling: We believe in the power of bicycles to change lives and communities.",
                "Sustainability: We are committed to promoting eco-friendly transportation solutions.",
                "Quality & Innovation: We strive to provide top-tier products with the latest technology.",
                "Community: We support cycling clubs, events, and initiatives that bring people together.",
                "Customer Commitment: We prioritize customer satisfaction with excellent service and reliable products.",
              ]}
              renderItem={(item) => <List.Item>{item}</List.Item>}
            />
          </Card>
        </Col>
      </Row>
      <Row gutter={[32, 32]} style={{ marginTop: "40px" }}>
        <Col xs={24} md={12}>
          <Card hoverable>
            <Title level={2}>Our History</Title>
            <Paragraph>
              Founded in 20XX, BikeWorld started as a small shop catering to
              local cyclists. Today, we have grown into a trusted online
              platform, offering a wide range of bicycles, gear, and expert
              advice for riders worldwide.
            </Paragraph>
          </Card>
        </Col>
        <Col xs={24} md={12}>
          <Card hoverable>
            <Title level={2}>Our Achievements</Title>
            <List
              bordered
              dataSource={[
                "Recognized as the Best Online Bike Shop by Cycling Enthusiasts for three consecutive years.",
                "Reached over 500,000 satisfied customers in 20XX.",
                "Partnered with leading cycling brands to bring premium products to our customers.",
              ]}
              renderItem={(item) => <List.Item>{item}</List.Item>}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default AboutUs;
