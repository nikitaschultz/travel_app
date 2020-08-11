import React, { Component } from "react";

//this needs a date, and a way to effectively get selected traveller

class CommentForm extends Component {
  constructor(props) {
  super(props);
  this.state = {
    author: '',//gonna be selectedTraveller after i follow the pathing down
    text: '',
    date: ''
  };
  this.handleAuthorChange = this.handleAuthorChange.bind(this);
this.handleTextChange = this.handleTextChange.bind(this);
}



handleTextChange(event) {
  this.setState({text: event.target.value});
}

handleSubmit(event) {
  event.preventDefault();
  const date = new Date();
  const text = this.state.text.trim();

  this.setState({
  date: date;,
  text: text
});
}

  render(){

    return(
      <form className="comment-form">
      <input type='text'placeholder = 'Say something'value={this.state.text}/>
      <input type='submit'value = 'post'/>
      </form>
    )
  }


}

export default CommentForm;
