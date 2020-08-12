import React, { Component } from "react";
import CommentList from "../components/comments/CommentList";
import CommentForm from "../components/comments/CommentForm";
import Request from '../../helpers/request';

const CommentBox = (props) => {

   function  handlePost(comment){
      const request = new Request();
      const url = '/api/comments'

      let trip = props.selectedTrip;
      delete trip.plans;
      comment.trip = trip;
      console.log(comment);
      request.post(url, comment)
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
