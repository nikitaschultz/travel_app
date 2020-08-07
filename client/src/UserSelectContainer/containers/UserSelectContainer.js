import React, {Component} from 'react';
import UserSelectTitle from '../components/UserSelectTitle.js';
import UserSelectSearch from '../components/UserSelectSearch.js';
import UserSelectGo from '../components/UserSelectGo.js';


class UserSelectContainer extends Component {
    constructor(props){
        super(props);
        // prop of all travellers will be passed down
        this.state = {
            selectedTraveller: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(selectedTraveller){
        this.setState({selectedTraveller: selectedTraveller});
    }

    // function which is passed down to userselectgo and sends the selectedtraveller to mainContainer

    render(){
        return(
            <div className="mainContainer">

                <UserSelectTitle />
                <UserSelectSearch travellers={this.props.travellers} onSelectTraveller={this.handleChange}/>
                <UserSelectGo />
            </div>
        )
    }
}

export default UserSelectContainer;
