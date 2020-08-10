import React, { Component, Fragment } from 'react';

class HolidayForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      holiday: {
        title: "",
        travellers: [],
        published: false
      }
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    let holiday = this.state.holiday;
    holiday.travellers.push(this.props.selectedTraveller);
    this.setState({holiday: holiday});
  }

  handleChange(event){
    let propertyName = event.target.name;
    let holiday = this.state.holiday;
    holiday[propertyName] = event.target.value;
    this.setState({holiday: holiday});
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.onCreate(this.state.holiday);
  }

  render(){
    return (
      <Fragment>
        <h1>Create a New Holiday</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="title">Holiday Title:</label>
          <input type="text"
            name="title"
            onChange={this.handleChange}
            value={this.state.holiday.title}/>
          <input type="submit" value="Create" />
        </form>
      </Fragment>
    )
  }
}

export default HolidayForm;
