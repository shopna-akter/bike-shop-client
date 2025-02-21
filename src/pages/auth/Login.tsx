import { Button, Form, Input, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/features/auth/authSlice";
import type { AppDispatch, RootState } from "../../redux/store";
import { useNavigate } from "react-router-dom";

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
    <Form onFinish={onFinish} layout="vertical">
      <Form.Item name="email" label="Email" rules={[{ required: true, type: "email", message: "Please enter your email!" }]}>
        <Input />
      </Form.Item>
      <Form.Item name="password" label="Password" rules={[{ required: true, message: "Please enter your password!" }]}>
        <Input.Password />
      </Form.Item>
      <Button type="primary" htmlType="submit" loading={isLoading}>
        Login
      </Button>
    </Form>
  );
};

export default Login;
