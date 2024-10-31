import React, { useState } from 'react';
import postss from '.././Example.js';
import Post from './Post.jsx';
import css from './Posts.module.css';

function Posts(props) {
    const [posts,setPosts] = useState(postss) ;

    return (
        <div className={css.posts}>
            {
                posts.map((post,index) => <Post key={index} post={post} />)
            }
        </div>
    );
}

export default Posts;