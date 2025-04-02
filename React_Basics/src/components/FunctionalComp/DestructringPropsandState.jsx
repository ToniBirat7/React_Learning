import React from 'react'

const DestructringPropsandState = (props) => {
    const {name, heroName} = props
  return (
    <>
        <h1>Hello, this is {heroName}</h1>
    </>
  )
}

export default DestructringPropsandState;
