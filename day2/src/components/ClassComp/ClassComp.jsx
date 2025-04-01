import React, { Component } from "react";

class Welcome extends Component {
    render() {
        return (
            <div className="classComp">
                <h1>Hi, it's me {this.props.name} Welcome</h1>
            </div>
        )
    }
}

export default Welcome;