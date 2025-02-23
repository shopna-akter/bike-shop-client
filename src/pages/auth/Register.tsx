import { Button, Form, Input, message, Card, Typography } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/features/auth/authSlice";
import type { AppDispatch, RootState } from "../../redux/store";

const { Title } = Typography;

const Register = () => {
    const { isLoading } = useSelector((state: RootState) => state.auth);
    const dispatch = useDispatch<AppDispatch>();
  
    const onFinish = (values: { name: string; email: string; password: string }) => {
      dispatch(register(values))
        .unwrap()
        .then(() => {
          message.success("Registration successful!");
        })
        .catch((error) => {
          message.error(error);
        });
    };
  
    return (
      <Card title={<Title level={3}>Register</Title>} style={{ maxWidth: 400, margin: "auto", marginTop: 50 }}>
        <Form onFinish={onFinish} layout="vertical">
          <Form.Item name="name" label="Name" rules={[{ required: true, message: "Please enter your name!" }]}>
            <Input placeholder="Enter your name" />
          </Form.Item>
          <Form.Item name="email" label="Email" rules={[{ required: true, type: "email", message: "Please enter a valid email!" }]}>
            <Input placeholder="Enter your email" />
          </Form.Item>
          <Form.Item name="password" label="Password" rules={[{ required: true, min: 6, message: "Password must be at least 6 characters!" }]}>
            <Input.Password placeholder="Enter your password" />
          </Form.Item>
          <Button type="primary" htmlType="submit" loading={isLoading} block>
            Register
          </Button>
        </Form>
      </Card>
    );
  };
  
  export default Register;
  