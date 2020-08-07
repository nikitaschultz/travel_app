import React, {Component} from 'react';
import UserSelectTitle from '../components/UserSelectTitle.js';
import UserSelectSearch from '../components/UserSelectSearch.js';
import UserSelectGo from '../components/UserSelectGo.js';
import UserSelectNewUser from '../components/UserSelectNewUser.js';
import Request from '../../helpers/request.js';


class UserSelectContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            allTravellers: [],
            selectedTraveller: '',
            isAddingUser: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.isAddingUser = this.isAddingUser.bind(this);
    }

    componentDidMount() {
        // fetch for all travellers
        const request = new Request();

        request.get('api/travellers')
        .then(data => {
            this.setState({
                allTravellers: data,
                isAddingUser: false
            });
        })
    }

    handleChange(selectedTraveller){
        this.setState({selectedTraveller: selectedTraveller});
    };

    handlePost(newTraveller){
        console.log(newTraveller);
    // const request = new Request();
    // request.post('/api/travellers', newTraveller)
    // .then(() => {
    //     window.location = '/pirates';
    // })
    }

    isAddingUser(){
        if (this.state.isAddingUser === false){
            this.setState({isAddingUser: true})
        } else if (this.state.isAddingUser === true){
            this.setState({isAddingUser: false});
        }
    };

    render(){
        return(
            <div className="mainContainer">

                <UserSelectNewUser isAddingUser={this.state.isAddingUser} onNewTraveller={this.handlePost} onToggle={this.isAddingUser}/>
                <UserSelectTitle />
                <UserSelectSearch travellers={this.state.allTravellers} onToggle={this.isAddingUser}onSelectTraveller={this.handleChange}/>
                <UserSelectGo />

            </div>
        )
    }
}

export default UserSelectContainer;
