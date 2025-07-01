import React, { Component } from 'react'

class RefDemo extends Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
    }

    componentDidMount() {
        this.inputRef.current.focus()
        console.log(this.inputRef)
    }

    clickHandle = () => {
        alert(this.inputRef.current.value)
    }
 
  render() {
    return (
        <>
      <input type='text' ref={this.inputRef}></input>
      <button onClick={this.clickHandle}>Click Me</button>
        </>
    )
  }
}

export default RefDemo;