import React, {Component, Fragment} from 'react';
import ProfileInfo from '../components/ProfileInfo.js';
import ProfileEditPage from '../components/ProfileEditPage.js';
import ProfileNavBar from '../components/ProfileNavBar.js';

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
          <Fragment>
            <div className="extended-container">
              <ProfileNavBar selectedTraveller={this.props.selectedTraveller} logOut={this.props.logOut} />
              <div className="container">
                <ProfileEditPage onToggle={this.isEditingUser} isEditingUser={this.state.isEditingUser} profile={this.props.selectedTraveller} />
                <ProfileInfo profile={this.props.selectedTraveller}/>
              </div>
            </div>
          </Fragment>
        )
    }

}

export default ProfileContainer;
