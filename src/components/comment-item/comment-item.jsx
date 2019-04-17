import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './comment-item.css'
import { deleteComment } from '../../redux/actions'

class CommentItem extends Component {
    static propTypes = {
        comment: PropTypes.object.isRequired,
        index: PropTypes.number.isRequired,
        deleteComment: PropTypes.func.isRequired
    }

    deleteComment = () => {
        const { index } = this.props;
        let { username } = this.props.comment
        if (window.confirm(`Do you want to delete ${username}'s comment?`)) {
            this.props.deleteComment(index)
        }
    }

    render() {
        const { comment } = this.props;

        return (
            <li className="list-group-item">
                <div className="handle">
                    <a href="javascript:" onClick={this.deleteComment}>Delete</a>
                </div>
                <p className="user"><span>{comment.username}</span><span>&nbsp;said:</span></p>
                <p className="centence">{comment.content}</p>
            </li>
        )
    }
}

export default connect(
    null,
    { deleteComment }
)(CommentItem)