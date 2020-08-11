import React, { Component } from "react";

//this needs a date, and a way to effectively get selected traveller

class CommentForm extends Component {
  constructor(props) {
  super(props);
  this.state = {
    comment:{
      traveller:props.selectTraveller,
      trip:props.selectedTrip,
      comment:'',
      date: new Date()

    }
  };

this.handleTextChange = this.handleTextChange.bind(this);
}



handleTextChange(event) {
   let comment=this.state.comment;
  comment.text=event.target.value
  this.setState({comment: comment});
}

handleSubmit(event) {
  event.preventDefault();

  const text = this.state.text.trim();
  //send
  this.setState({

  text: text
});
 this.props.onCreate(this.state.comment)
}

  render(){

    return(
      <form className="comment-form">
      <input type='text'placeholder = 'Say something'value={this.state.comment.text} onChange={this.handleTextChange}/>
      <input type='submit'value = 'post'/>
      </form>
    )
  }


}

export default CommentForm;
