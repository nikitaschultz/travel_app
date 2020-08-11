import React, { Component } from "react";
import CommentList from "../components/comments/CommentList";
// import CommentForm from "../components/CommentForm";

const CommentBox = ({comments}) => {


    return (
      <div className="comment-box">


        <h2>Comments</h2>
        <CommentList comments={comments} />
      </div>
    )


}

export default CommentBox;
