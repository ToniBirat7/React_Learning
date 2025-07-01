import React, {Component} from "react";
import Children from "./Children";

class Parent extends Component {

    constructor() {
        super();
        this.state = {
            parentName: 'Birat'
        }
        this.greetParent = this.greetParent.bind(this);
    }

    greetParent(childName) {
        alert(`Hello ${this.state.parentName} from ${childName}`)
    }

    render() {
        return (
            <>
            <Children greetHandler={this.greetParent}></Children>
            </>
        )
    }

}

export default Parent;