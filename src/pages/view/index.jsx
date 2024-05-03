import React from 'react';
import CreatePost from '../../components/CreatePost';
import PostItem from '../../components/PostItem';
import './styles.scss';

const View = () => {
    return (
        <div className="container-home">
            <div className="list-post">
                <PostItem />
                <PostItem />
                <PostItem />
                <PostItem />
            </div>
        </div>
    )
}

export default View;