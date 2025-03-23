import React, { Component } from "react";

class CounterBtn extends Component {

    constructor() {
        super()

        this.state = {
            count: 0
        }
    }

    increaseValue() {

        this.setState(
            {
                count: this.state.count + 1
            }, () => {console.log('Callback Value', this.state.count)} // Passing a callback function in the setState function
        )
    }

    render() {
        return (
            <>
                <h1> This is Counter Class Component </h1>
                <h3> Current Counting {this.state.count} </h3>
                <button onClick={ () => this.increaseValue() }>Click to Count</button>
            </>
        )
    }
}

export default CounterBtn;