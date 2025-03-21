import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Greet from './components/FuncComp'
import Welcome from './components/ClassComp'
import ChildProps from './components/ChildProps'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Greet name="Birat" commonGreet="Namaste"/>
        <Welcome />
        <ChildProps name="Suman" commonGreet="Namaste">
          <p>I was called as Child Props</p>
        </ChildProps>
      </div>
    </>
  )
}

export default App;
