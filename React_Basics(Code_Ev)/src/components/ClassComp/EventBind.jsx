import React, { Component } from 'react'

export class EventBind extends Component {

    constructor(props) {
        super(props);
        this.state = {
            message: 'Hello'
        }
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler() {
        this.setState({
            message: 'I am Clicked'
        })
    }

  render() {
    return (
        <>
            <h1>{this.state.message}</h1>
            <button onClick={this.clickHandler}>Click me Bind</button>
        </>
    )
  }
}

export default EventBind