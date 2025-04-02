import React, { Component } from 'react';
import style from './form.module.css'

export class Form extends Component {

    constructor(props) {
        super(props)
        this.state = {
            userName: "",
            text: "",
            topic: "react"
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleChangeText = this.handleChangeText.bind(this)
        this.handleTopicChange = this.handleTopicChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({
            userName: event.target.value
        })
        console.log(event.target.value)
    }

    handleChangeText(event) {
        this.setState({
            text: event.target.value
        })
    }

    handleTopicChange(event) {
        this.setState({
            topic: event.target.value
        })
    }

    handleSubmit(event) {
        alert(`${this.state.userName} ${this.state.topic} ${this.state.text}`)
        event.preventDefault()
    }

  render() {
    const {userName, topic, text} = this.state
    return (
      <div className={style.main}>
        Form Component
        <form onSubmit={this.handleSubmit}>
            <div className={style.main}>
                <label>Username</label>
                <input 
                type='text'
                value={userName} 
                onChange={this.handleChange}                        
                />
            </div>
            <div className={style.main}>
                <label>Text Area</label>
                <input 
                type='textarea' 
                value={text} 
                onChange={this.handleChangeText}
                />
            </div>
            <div className={style.main}>
                <label>Topic</label>
                <select value={topic} onChange={this.handleTopicChange}>
                    <option value="react">React</option>
                    <option value="angular">Angular</option>
                    <option value="vue">Vue</option>
                </select>
            </div>
            <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

export default Form