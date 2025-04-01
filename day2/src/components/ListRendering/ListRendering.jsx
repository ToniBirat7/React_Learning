import React from 'react'
import PersonList from './PersonList'

function ListRendering() {
    const person = ['Bruce', 'Clark', 'Diana']
    const personsList = person.map((person, index) => (<PersonList key={index} person={person}></PersonList>))
  return (
    <div>
        {personsList}
    </div>
  )
}

export default ListRendering;