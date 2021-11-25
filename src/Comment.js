import React from 'react';
import faker from 'faker'; //using fakerjs libray to create fake avatar images.
const Comment = (props) =>{
    return(
        <div className="comment">
            <a href="/" className="avatar"><img alt="avatar" src={faker.image.avatar()} /></a>
            <div className="content">
                <a href="/" className="author">{props.post.author}</a>
                <div className="metadata"><span className="date">{props.post.date}</span></div>
                <div className="text">{props.post.text}</div>
            </div>  
        </div>
    )
}
export default Comment;