import React, { memo } from 'react';
import image from '../images/mb.jpg';
import css from './Post.module.css';

function Post(props) {
    console.log(props.post)
    return (
        <div className={css.post}>
            <header>
                {props.post.username}
            </header>
            <body>
                <img src={image} alt='not fount' className={css.post_image}/>
            </body>
            <footer>
                <div className={css.likes}>
                    {props.post.likes} Likes
                </div>
                <div className={css.caption}>
                    {props.post.caption}
                </div>
            </footer>
        </div>
    );
}

export default memo(Post);