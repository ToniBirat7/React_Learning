import Greet from './components/FunctionalComp/FuncComp'
import Welcome from './components/ClassComp/ClassComp'
import ChildProps from './components/ChildProps/ChildProps'
import Message from './components/ClassComp/ClassState'

import './App.css'

function App() {

  return (
    <>
      <div>

        <Greet name="Birat" commonGreet="Namaste"/>

        <Welcome name="Class Prop"/>

        <ChildProps name="Suman" commonGreet="Namaste">
          <p>I was called as Child Props</p>
        </ChildProps>

        <Message />
        
      </div>
    </>
  )
}

export default App;