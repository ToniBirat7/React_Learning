import React, { Component } from 'react'

class ClassClick extends Component {
    handleClick() {
        console.log("Class Clicked")
    }
  render() {
    return (
        <>
      <button onClick={this.handleClick}>Click Me Class</button>
        </>
    )
  }
}

export default ClassClick;