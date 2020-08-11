import React, { Component } from "react";
import CommentList from "../components/comments/CommentList";
import CommentForm from "../components/comments/CommentForm";
import Request from '../../helpers/request';

const CommentBox = (props) => {

   function  handlePost(holiday){
      const request = new Request();
      const url = '/api/comments'
      request.post(url, holiday)
      .then(() => {

      })
    }


    return (
      <div className="comment-box">

        <CommentForm onCreate={handlePost} selectedTrip={props.selectedTrip} selectedTraveller={props.selectedTraveller} comments = {props.comments} />
        <h2>Comments</h2>
        <CommentList comments={props.comments} />

      </div>
    )


}

export default CommentBox;
