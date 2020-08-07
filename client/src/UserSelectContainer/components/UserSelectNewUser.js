import React, { Component } from 'react';
import { Form, FormGroup, FormControl, ControlLabel, HelpBlock } from 'rsuite';
import { Button, IconButton, ButtonGroup, ButtonToolbar } from 'rsuite';

class UserSelectNewUser extends Component {
    constructor(props){
        super(props);
        this.state = {
            newUser: {
                name: ""
            }
        }
        this.handlePopUp = this.handlePopUp.bind(this);
    }

    handlePopUp(){
        this.props.onToggle();
    }

    render(){

        if (this.props.isAddingUser === true){
            return(

                <Form className="addUserForm">
                <FormGroup className="addUserFormItem">
                <ControlLabel>Username</ControlLabel>
                <FormControl name="name" />
                <HelpBlock>Required</HelpBlock>
                </FormGroup>

                <FormGroup className="addUserFormItem">
                <ButtonToolbar>
                <Button appearance="primary">Submit</Button>
                <Button appearance="default" onClick={this.handlePopUp}>Cancel</Button>
                </ButtonToolbar>
                </FormGroup>
                </Form>
            )
        }

        return null;
    }
}

export default UserSelectNewUser;
