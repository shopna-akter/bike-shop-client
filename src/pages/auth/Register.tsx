import { Button, Form, Input, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/features/auth/authSlice";
import type { AppDispatch, RootState } from "../../redux/store";

const Register = () => {
    const { isLoading } = useSelector((state: RootState) => state.auth);
    const dispatch = useDispatch<AppDispatch>();

    const onFinish = (values: { name: string; email: string; password: string }) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        dispatch(register(values as any))
            .unwrap()
            .then(() => {
                message.success("Registration successful!");
            })
            .catch((error) => {
                message.error(error);
            });
    };

    return (
        <Form onFinish={onFinish} layout="vertical">
            <Form.Item name="name" label="Name" rules={[{ required: true, message: "Please enter your name!" }]}>
                <Input />
            </Form.Item>
            <Form.Item name="email" label="Email" rules={[{ required: true, type: "email", message: "Please enter a valid email!" }]}>
                <Input />
            </Form.Item>
            <Form.Item name="password" label="Password" rules={[{ required: true, message: "Please enter your password!" }]}>
                <Input.Password />
            </Form.Item>
            <Button type="primary" htmlType="submit" loading={isLoading}>
                Register
            </Button>
        </Form>
    );
};

export default Register;
