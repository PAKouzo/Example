import React from 'react';
import { Form, Input, Button, message } from 'antd';
import axios from 'axios';

const Register = () => {
    const onFinish = async (values) => {
        try {
            const response = await axios.post('http://localhost:9000/users/signup', values);
            message.success(response.data.message);
            history.push('/auth/login');
        } catch (error) {
            message.error(error.response.data.message || 'Đã xảy ra lỗi khi đăng ký!');
        }
    };
    const validatePhoneNumber = (rule, value, callback) => {
        const phoneNumberRegex = /^[0-9]+$/; // Regex để kiểm tra chỉ có ký tự số
        if (!value || phoneNumberRegex.test(value)) {
            callback(); // Hợp lệ
        } else {
            callback('Số điện thoại chỉ được chứa ký tự số!'); // Không hợp lệ
        }
    };
    return (
        <div className="container-form-register">
            <h1>Đăng ký tài khoản</h1>
            <Form
                onFinish={onFinish}
                name="basic"
                labelCol={{
                    span: 6,
                }}
                wrapperCol={{
                    span: 16,
                }}
                style={{
                    maxWidth: 600,
                }}
            >
                <Form.Item
                    label="Tên"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Bạn cần nhập tên tài khoản của bạn!',
                        },
                    ]}
                >
                    <Input placeholder="VD: Nguyễn Văn A" size="small" />
                </Form.Item>
                <Form.Item
                    label="Phone"
                    name="phone"
                    rules={[
                        {
                            required: true,
                            message: 'Bạn cần nhập số điện thoại và đúng định dạng!'
                        },
                        {
                            validator: validatePhoneNumber // Sử dụng hàm kiểm tra định dạng số điện thoại
                        },
                    ]}
                >
                    <Input placeholder="+84xxxxx" size="small" />
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
                    label="Confirm Password"
                    name="confirmPassword"
                    dependencies={['password']}
                    rules={[
                        {
                            required: true,
                            message: 'Bạn cần nhập lại mật khẩu!',
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(new Error('Mật khẩu xác nhận không trùng khớp!'));
                            },
                        }),
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
                        <Button size="small" htmlType="submit">
                            Đăng ký
                        </Button>
                        {/* Chuyển hướng người dùng đến trang đăng nhập */}
                        <Button
                            size="small"
                            className="btn-signup"
                            onClick={() => {
                                window.location.href = '/auth/login';
                            }}
                        >
                            Đăng nhập
                        </Button>
                    </div>
                </Form.Item>
            </Form>
        </div>
    );
};

export default Register;