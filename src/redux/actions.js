/*
    File for redux actions (dispatch)
*/
import { ADD_COMMENT, DELETE_COMMENT, RECEIVE_COMMENT } from './action-types'

export const addComment = (comment) => ({ type: ADD_COMMENT, data: comment })

export const deleteComment = (index) => ({ type: DELETE_COMMENT, data: index })

const receiveComment = (comments) => ({ type: RECEIVE_COMMENT, data: comments })

export const getComments = () => {
    return dispatch => {
        const initialComments = [
            { username: "Tom", content: "Good!" },
            { username: "Lex", content: "Nice!" }
        ]

        setTimeout(() => {
            dispatch(receiveComment(initialComments))
        }, 1000)
    }
}



