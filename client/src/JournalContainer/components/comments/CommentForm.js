import React, { Component } from "react";

//this needs a date, and a way to effectively get selected traveller

class CommentForm extends Component {
  constructor(props) {
  super(props);
  this.state = {
    author: props.selectTraveller,//gonna be selectedTraveller after i follow the pathing down
    text: '',
    date: ''
  };

this.handleTextChange = this.handleTextChange.bind(this);
}



handleTextChange(event) {
  this.setState({text: event.target.value});
}

handleSubmit(event) {
  event.preventDefault();
  const date = new Date();
  const text = this.state.text.trim();
  //send
  this.setState({
  date: date,
  text: text
});
}

  render(){

    return(
      <form className="comment-form">
      <input type='text'placeholder = 'Say something'value={this.state.text} onChange={this.handleTextChange}/>
      <input type='submit'value = 'post'/>
      </form>
    )
  }


}

export default CommentForm;
