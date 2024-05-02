import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Input, message } from 'antd';
import './styles.scss';
import axios from 'axios';

const Login = () => {
    const navigate = useNavigate(); // Sử dụng hook navigate từ react-router-dom

    const finishLogin = async (values) => {
        try {
            const response = await axios.post('http://localhost:9000/users/login', values);
            const token = response.data; // Nhận token từ phản hồi của API
            localStorage.setItem('token', token); // Lưu token vào localStorage hoặc sessionStorage
            navigate('/home'); // Chuyển hướng đến trang chính
        } catch (error) {
            message.error(error.response.data.message || 'Đã xảy ra lỗi khi đăng nhập!');
        }
    };
    return (
        <div className="container-form-login">
            <h1>Social app MindX Fullstack</h1>
            <Form
                onFinish={finishLogin}
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }} 
                style={{
                    maxWidth: 600,
                }}
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Bạn cần nhập username!',
                        },
                    ]}>
                    <Input placeholder="username" size="small" />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Bạn cần nhập mật khẩu!',
                        },
                    ]}
                >
                    <Input.Password size="small" />
                </Form.Item>
                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 14,
                    }}
                >
                    <div className="btn">
                        <Button 
                            size="small" 
                            htmlType="submit"
                        >
                            Đăng nhập
                        </Button>
                        <Button
                            size="small"
                            className="btn-signup"
                            onClick={() => {
                                navigate('/auth/register');
                            }}
                        >
                            Đăng ký
                        </Button>
                    </div>
                </Form.Item>
            </Form>
        </div>
    )
}

export default Login
