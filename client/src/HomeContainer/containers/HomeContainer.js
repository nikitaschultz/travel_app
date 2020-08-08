import React, { Component } from 'react';
import HomeWelcome from '../components/HomeWelcome.js';

class HomeContainer extends Component {
    constructor(props){
        super(props);
    }

    render(){

        if (this.props.selectedTraveller === ""){
            return null
        } else {
            return(
                <div className="container">

                    <HomeWelcome selectedTraveller={this.props.selectedTraveller}/>


                </div>

            )
        }
    }

}

export default HomeContainer;
