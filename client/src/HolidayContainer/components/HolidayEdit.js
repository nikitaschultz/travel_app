import React, { Component, Fragment } from 'react';

class HolidayEdit extends Component {
  constructor(props){
    super(props);
    this.state = {
      holiday: this.props.holiday
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTravellerChange = this.handleTravellerChange.bind(this);
  }

  handleChange(event){
    let propertyName = event.target.name;
    let holiday = this.state.holiday;
    holiday[propertyName] = event.target.value;
    this.setState({holiday: holiday});
  }

  handleTravellerChange(event){
    const id = event.target.value;
    const traveller = this.props.findTravellerById(id);
    let holiday = this.state.holiday;

    if(event.target.checked === true){
      holiday.travellers.push(traveller);
    }else{
      const index = holiday.travellers.findIndex((foundTraveller) => {
        return foundTraveller.id === traveller.id
      })
      holiday.travellers.splice(index, 1);
    }

    this.setState({holiday: holiday})
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.onUpdate(this.state.holiday.id, this.state.holiday);
  }

  render(){
    let travellerCheckboxes = this.props.travellers.map((traveller, index) => {
      if(traveller.id !== this.props.selectedTraveller.id){
        if(this.props.holiday.travellers.some(includedTraveller => traveller.id === includedTraveller.id)){
          return (
            <li key={index}>
              <input type="checkbox" defaultChecked={true} value={traveller.id} id={traveller.id} onChange={this.handleTravellerChange} ></input>
              <label htmlFor={traveller.id}>{traveller.name}</label>
            </li>
          )
        }else{
          return (
            <li key={index}>
              <input type="checkbox" value={traveller.id} id={traveller.id} onChange={this.handleTravellerChange}></input>
              <label htmlFor={traveller.id}>{traveller.name}</label>
            </li>
          )
        }
      }else{
        return null
      }
    })

    return (
      <Fragment>
        <h1>Edit Holiday</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="title">Holiday Title:</label>
          <input type="text"
            name="title"
            onChange={this.handleChange}
            value={this.state.holiday.title}/>
          <ul>
            {travellerCheckboxes}
          </ul>
          <input type="submit" value="Save" />
        </form>
      </Fragment>
    )
  }

}

export default HolidayEdit;
