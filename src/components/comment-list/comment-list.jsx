import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './comment-list.css';
import CommentItem from '../comment-item/comment-item';
import { getComments } from '../../redux/actions'

class CommentList extends Component {
    static propTypes = {
        comments: PropTypes.array.isRequired,
        getComments: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getComments();
    }

    render() {
        let comments = this.props.comments;
        let display = comments.length > 0 ? 'none' : 'block';

        return (
            <div className="col-md-8">
                <h3 className="reply">Comments Feedback:</h3>
                <h2 style={{ display: display }}>No comments, please add some comments on the left!</h2>
                <ul className="list-group">
                    {
                        comments.map((comment, index) => {
                            return <CommentItem comment={comment} key={index} index={index} />
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default connect(
    state => ({ comments: state.comments }),
    { getComments }
)(CommentList)