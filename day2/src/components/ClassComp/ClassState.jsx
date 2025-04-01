import React, { Component } from 'react';

class Message extends Component {

// Declare State Inside the Constructor

    constructor() {
        
        super() // Initialize the Parent Class Component

        this.state = {
            message: 'Hi! this is state from Class Component'
        }
    }

    changeMessage() {
        this.setState(
            {
                messages: 'Hi, the message has been changed'
            }
        ) 
    }

    render() {

        return (
            <>
                <h1> We are now calling the state variable message who's value {this.state.message} </h1>
                <button onClick={ () => this.changeMessage() }>Click Me</button>
            </>
        )
    }
}

export default Message;