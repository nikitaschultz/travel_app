import React, { Component } from 'react';

class UserSelectNewUser extends Component {
    constructor(props){
        super(props);
        this.state = {
            newTraveller: {
                name: ""
            }
        }
        this.handlePopUp = this.handlePopUp.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handlePopUp(){
        this.props.onToggle();
    }

    handleNameChange(event){
        let propertyName = event.target.name;
        let newTraveller = this.state.newTraveller;
        newTraveller[propertyName] = event.target.value;
        this.setState({newTraveller: newTraveller});
    }

    handleSubmit(event){
        event.preventDefault();
        this.props.onNewTraveller(this.state.newTraveller);
        this.props.onToggle();
    }

    render(){

        if (this.props.isAddingUser === true){
            return(

                <form className="addUserForm" onSubmit={this.handleSubmit}>

                    <div>
                        <label> Name </label>
                        <input onChange={this.handleNameChange} value={this.state.newTraveller.name} name="name" />
                    </div>

                    <div>
                        <button type="submit"> Add User</button>
                        <button type="button" onClick={this.handlePopUp}>Cancel</button>
                    </div>
                </form>
            )
        }

        return null;
    }
}

export default UserSelectNewUser;
