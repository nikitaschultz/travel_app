import React, { Component } from "react";
import Comment from "./Comment";


class CommentList extends Component {
  render() {
    const commentNodes = this.props.comments.map(comment => {
      return (
        <Comment author={comment.traveller.name} key={comment.id}>
            {comment.comment}
        </Comment>
      );
    });

    return (
      <ul className="comment-list">
        {commentNodes}
      </ul>
    );
  }
}

export default CommentList;
