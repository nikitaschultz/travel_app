import React, {Component} from 'react';
import ProfileInfo from '../components/ProfileInfo.js';
import ProfileEditPage from '../components/ProfileEditPage.js';
import Request from '../../helpers/request.js';

class ProfileContainer extends Component{
    constructor(props){
        super(props);
        this.state = {
            isEditingUser: false
        }
        this.isEditingUser = this.isEditingUser.bind(this);
        this.handlePut = this.handlePut.bind(this);
    }


    isEditingUser(){
        if (this.state.isEditingUser === false){
            this.setState({isEditingUser: true})
        } else if (this.state.isEditingUser === true){
            this.setState({isEditingUser: false});
        }
    };

    handlePut(id, newTraveller){

        newTraveller.id = id;

        const request = new Request();
        const url = `/api/travellers/${id}`;

        request.post(url, newTraveller)
        .then(() => {

        });

        this.props.renderNewDetails(newTraveller);
    }

    render(){
        return (
            <div className="extended-container">
                <div className="container">
                    <ProfileEditPage onEditTraveller={this.handlePut} onToggle={this.isEditingUser} isEditingUser={this.state.isEditingUser} profile={this.props.selectedTraveller} />
                    <ProfileInfo onToggle={this.isEditingUser} profile={this.props.selectedTraveller}/>
                </div>
            </div>
        )
    }

}

export default ProfileContainer;
