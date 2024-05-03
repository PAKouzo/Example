import React, { useRef, useState } from 'react';
import { Avatar, Button, Form, Input } from 'antd';
import logo from '../../assets/logo.jpg'
import './styles.scss';

const Account = () => {
    const finishUpdate = async (values) => {
        try{
            const response = await axios.post('http://localhost:9000/users/:userID/profile', values);
            const token = response.data;
            localStorage.setItem('token', token); 
        }
        catch{
            message.error(
              error.response.data.message || "Đã xảy ra lỗi khi cập nhập!"
            );
        }
    }
    const inputFileRef = useRef(null);
    const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }
    return (
        <div className="container-account">
            <Form
                // onFinish={onSubmit}
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
                    label="Ảnh"
                    name="avatar"
                >
                    <Avatar src={file || logo} size={200} shape='square' />
                    <input ref={inputFileRef} type="file" onChange={handleChange} style={{ display: 'none' }} />
                    <br />
                    <Button onClick={() => {
                        inputFileRef.current.click();
                    }}>
                        Tải ảnh
                    </Button>
                </Form.Item>
                <Form.Item
                    label="Phone"
                    name="phone"
                    rules={[
                        {
                            required: true,
                            message: 'Bạn cần nhập số điện thoại!',
                        },
                    ]}
                >
                    <Input size="small" />
                </Form.Item>
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Bạn cần nhập email và đúng định dạng!',
                            type: 'email'
                        },
                    ]}>
                    <Input placeholder="example@gmail.com" size="small" />
                </Form.Item>

                <Form.Item
                    label="Bio"
                    name="bio"
                >
                    <Input.Password size="small" />
                </Form.Item>
                <div className="btn">
                    <Button size="small" htmlType="submit">
                        Cập nhật
                    </Button>
                    <Button
                        size="small"
                        className="btn-signup"
                        onClick={() => {
                        }}
                    >
                        Huỷ
                    </Button>
                </div>
            </Form>
        </div>
    )
}

export default Account;