import React, { Component } from "react";
import CommentList from "../components/comments/CommentList";
import CommentForm from "../components/comments/CommentForm";

const CommentBox = (props) => {


    return (
      <div className="comment-box">

        <CommentForm selectedTraveller={props.selectedTraveller} comments = {props.comments} />
        <h2>Comments</h2>
        <CommentList comments={props.comments} />

      </div>
    )


}

export default CommentBox;
