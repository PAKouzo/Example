import React, { useState } from 'react';
import { Avatar, Input, Button, message } from 'antd';
import avtUser from '../../assets/user.png';
import './styles.scss';
import axios from 'axios';

const CreatePost = (props) => {
    const [content, setContent] = useState('');

    const handleCreatePost = async () => {
        try {
            // Gọi API POST để tạo bài post
            const response = await axios.post(`http://localhost:9000/users/${props.userID}/posts`, { content });
            // Hiển thị thông báo thành công
            message.success(response.data.message);
            // Reset nội dung bài post sau khi tạo thành công
            setContent('');
        } catch (error) {
            // Hiển thị thông báo lỗi nếu có lỗi khi tạo bài post
            message.error(error.response.data.message || 'Đã xảy ra lỗi khi tạo bài post!');
        }
    };

    return (
      <div className={`create-post-component bg-white ${props.className}`}>
        <div className="half">
          <Avatar size={50} src={avtUser} shape="circle" className="avatar" />
          <Input.TextArea
            className="type-post"
            placeholder="Bạn đã nghĩ gì? Hãy chia sẻ tại đây nhé!"
            style={{ resize: "none" }}
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <Button onClick={handleCreatePost}>Create</Button>
        </div>
      </div>
    );
}

export default CreatePost;
