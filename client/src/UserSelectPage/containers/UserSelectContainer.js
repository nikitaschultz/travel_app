import React, {Component} from 'react';
import UserSelectTitle from '../components/UserSelectTitle.js';
import UserSelectSearch from '../components/UserSelectSearch.js';
import UserSelectGo from '../components/UserSelectGo.js';
import Request from '../../helpers/request.js';


class UserSelectContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            allTravellers: [],
            selectedTraveller: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        // fetch for all travellers
        const request = new Request();

        request.get('/api/travellers')
        .then(data => {
            this.setState({
                allTravellers: data
            })
        })
    }

    handleChange(selectedTraveller){
        this.setState({selectedTraveller: selectedTraveller});
    }

    render(){
        return(
            <div className="mainContainer">

                <UserSelectTitle />
                <UserSelectSearch travellers={this.state.allTravellers} onSelectTraveller={this.handleChange}/>
                <UserSelectGo />
            </div>
        )
    }
}

export default UserSelectContainer;
