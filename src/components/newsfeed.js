import React from 'react';
import Post from './post';
import ReplyButton from './reply-button';
import LikeButton from './like-button';
import Comment from './comment';

let e = React.createElement;

export default class Newsfeed extends React.Component {
    render() {
        return e('div', 
        {class: 'container'}, 
        e(Post, {}, null), 
        e(Post, {}, null), 
        e(Post, {}, null) 
        );
    }
}