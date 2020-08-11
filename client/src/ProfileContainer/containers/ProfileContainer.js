import React, {Component} from 'react';
import ProfileInfo from '../components/ProfileInfo.js';
import ProfileEditPage from '../components/ProfileEditPage.js';

class ProfileContainer extends Component{
    constructor(props){
        super(props);
        this.state = {
            isEditingUser: false
        }
    }

    isEditingUser(){
        if (this.state.isEditingUser === false){
            this.setState({isEditingUser: true})
        } else if (this.state.isEditingUser === true){
            this.setState({isEditingUser: false});
        }
    };

    render(){
        return (
            <div className="container">
                <ProfileEditPage onToggle={this.isEditingUser} isEditingUser={this.state.isEditingUser} profile={this.props.selectedTraveller} />
                <ProfileInfo profile={this.props.selectedTraveller}/>
            </div>
        )
    }

}

export default ProfileContainer;
