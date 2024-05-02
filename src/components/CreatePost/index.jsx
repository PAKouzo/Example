import React from 'react';
import { Avatar, Input } from 'antd';
import mindx from '/mindxLogo.jpeg';
import './styles.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { Button } from 'antd/es/radio';

const CreatePost = (props) => {
    return (
        <div className={`create-post-component bg-white ${props.className}`}>
            <div className="half">
                <Avatar size={50} src={mindx} shape="circle" className="avatar"/>
                <Input.TextArea className="type-post" placeholder='Bạn đã nghĩ gì? Hãy chia sẻ tại đây nhé!' style={{ resize: 'none' }}>
                </Input.TextArea>
                <Button>Create</Button>
            </div>
            
        </div>
    )
}

export default CreatePost;