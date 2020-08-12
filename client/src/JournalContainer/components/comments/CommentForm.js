import React, { Component } from "react";



class CommentForm extends Component {
  constructor(props) {
  super(props);
  this.state = {
    comment:{
      traveller:props.selectedTraveller,

      comment:'',
      date: new Date()

    }
  };

this.handleTextChange = this.handleTextChange.bind(this);
this.handleSubmit = this.handleSubmit.bind(this);

}



handleTextChange(event) {
   let comment=this.state.comment;
  comment.comment=event.target.value
  this.setState({comment: comment});
}

handleSubmit(event) {
  event.preventDefault();


  const text = this.state.comment.comment.trim();
  //send
  this.setState({

  text: text
});
 this.props.onCreate(this.state.comment)
}

  render(){

    return(
      <form className="comment-form" onSubmit= {this.handleSubmit}>
      <input type='text'placeholder = 'Say something'value={this.state.comment.text} onChange={this.handleTextChange}/>
      <input type='submit'/>
      </form>
    )
  }


}

export default CommentForm;
