import { Button, Form, Input, message, Card, Typography } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/features/auth/authSlice";
import type { AppDispatch, RootState } from "../../redux/store";
import { useNavigate } from "react-router-dom";

const { Title, Text } = Typography;

const Login = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { isLoading } = useSelector((state: RootState) => state.auth);

  const onFinish = (values: { email: string; password: string }) => {
    dispatch(login(values))
      .unwrap()
      .then(() => {
        message.success("Login successful!");
        navigate("/dashboard");
      })
      .catch((error) => {
        message.error(error);
      });
  };

  return (
    <Card title={<Title level={3}>Login</Title>} style={{ maxWidth: 400, margin: "auto", marginTop: 50 }}>
      <Form onFinish={onFinish} layout="vertical">
        <Form.Item name="email" label="Email" rules={[{ required: true, type: "email", message: "Please enter a valid email!" }]}>
          <Input placeholder="Enter your email" />
        </Form.Item>
        <Form.Item name="password" label="Password" rules={[{ required: true, message: "Please enter your password!" }]}>
          <Input.Password placeholder="Enter your password" />
        </Form.Item>
        <Text type="secondary" style={{ display: "block", marginBottom: 16 }}>
          <a href="/forgot-password">Forgot Password?</a>
        </Text>
        <Button type="primary" htmlType="submit" loading={isLoading} block>
          Login
        </Button>
      </Form>
    </Card>
  );
};

export default Login;