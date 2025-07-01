import React from 'react'

const FunctionClick = () => {

    function clickHandler() {
        console.log("Presssed")
    }
  return (
    <>
    <button onClick={clickHandler}>Click Me</button>
    </>
  )
}

export default FunctionClick