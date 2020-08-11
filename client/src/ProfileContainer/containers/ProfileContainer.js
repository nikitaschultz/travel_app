import React, {Component, Fragment} from 'react';
import ProfileInfo from '../components/ProfileInfo.js';
import ProfileEditPage from '../components/ProfileEditPage.js';
<<<<<<< HEAD
import ProfileNavBar from '../components/ProfileNavBar.js';
=======
import Request from '../../helpers/request.js';
>>>>>>> development

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
<<<<<<< HEAD
          <Fragment>
            <div className="extended-container">
              <ProfileNavBar selectedTraveller={this.props.selectedTraveller} logOut={this.props.logOut} />
              <div className="container">
                <ProfileEditPage onToggle={this.isEditingUser} isEditingUser={this.state.isEditingUser} profile={this.props.selectedTraveller} />
                <ProfileInfo profile={this.props.selectedTraveller}/>
              </div>
=======
            <div className="extended-container">
                <div className="container">
                    <ProfileEditPage onEditTraveller={this.handlePut} onToggle={this.isEditingUser} isEditingUser={this.state.isEditingUser} profile={this.props.selectedTraveller} />
                    <ProfileInfo onToggle={this.isEditingUser} profile={this.props.selectedTraveller}/>
                </div>
>>>>>>> development
            </div>
          </Fragment>
        )
    }

}

export default ProfileContainer;
