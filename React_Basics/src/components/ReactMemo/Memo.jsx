import React from 'react'

function Memo({name}) {
  return (
    <div>Hi! this is {name}</div>
  )
}

export default React.memo(Memo);