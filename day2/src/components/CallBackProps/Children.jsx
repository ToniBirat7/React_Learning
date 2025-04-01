import React from 'react'

const Children = (props) => {
  return (
    <button onClick={() => {props.greetHandler('Child')}}>Click me to call parent Function</button>
  )
}

export default Children;