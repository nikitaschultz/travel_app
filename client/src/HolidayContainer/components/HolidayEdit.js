import React, { Component, Fragment } from 'react';

class HolidayEdit extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      holiday: this.props.holiday
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    let propertyName = event.target.name;
    let holiday = this.state.holiday;
    holiday[propertyName] = event.target.value;
    this.setState({holiday: holiday});
  }

  render(){
    return (
      <Fragment>
        <h1>Edit Holiday</h1>
        <form>
          <label htmlFor="title">Holiday Title:</label>
          <input type="text"
            name="title"
            onChange={this.handleChange}
            value={this.state.holiday.title}/>
          <input type="submit" value="Save" />
        </form>
      </Fragment>
    )
  }

}

export default HolidayEdit;
