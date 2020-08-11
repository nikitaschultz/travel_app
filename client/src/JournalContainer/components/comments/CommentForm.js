import React, { Component } from "react";

//this needs a date, and a way to effectively get selected traveller gonna look at the trip stuff for inspiration

class CommentForm extends Component {
  constructor(props) { // NEW
  super(props);
  this.state = {
    author: '',
    text: ''
  };
  this.handleAuthorChange = this.handleAuthorChange.bind(this);
this.handleTextChange = this.handleTextChange.bind(this);
}



handleTextChange(event) { // NEW
  this.setState({text: event.target.value});
}

handleSubmit(event) {
  event.preventDefault();

  const text = this.state.text.trim();

  this.setState({

  text: ''
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
