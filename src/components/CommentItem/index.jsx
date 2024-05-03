import React from 'react';
import { Avatar } from 'antd';
import avt from '../../assets/avt.png';
import './styles.scss';

const CommentItem = (props) => {
    return (
      <div className={`comment-item ${props.className}`}>
        <Avatar size={30} src={avt} />
        <div className="author-comment">
          <span className="author">Đỗ Trung Hiếu</span>
          <p>Woww</p>
        </div>
      </div>
    );
}

export default CommentItem;