import React from 'react';
import LikeButton from './like-button';

let e = React.createElement;



export default class ReplyButton extends React.Component {
    render() {
        return <button className="btn-btn-danger">Reply</button>;
    }
}










// export default class ReplyButton extends React.Component {
//     render() {
//         return e('div',
//             { class: 'card w-75' },
//             e('div',
//                 { class: 'card-header bg-success text-white' },
//                 'Username and Time'),
//             e('div',
//                 { class: 'card-body' },
//                 'Comment Content'),
//             e('div',
//                 { class: 'card-footer' },
//                 e(LikeButton, {}, null),
//                 e('span', {}, ' '),
//                 e(ReplyButton, {}, null)
//             )
//         );
//     }
// }