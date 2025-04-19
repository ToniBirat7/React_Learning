import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import CounterBtn from './components/ClassComp/CounterClassComp.jsx'
import DestructringPropsandState from './components/FunctionalComp/DestructringPropsandState.jsx'
import FunctionClick from './components/FunctionalComp/FunctionClick.jsx'
import ClassClick from './components/ClickClass/ClassClick.jsx'
import EventBind from './components/ClassComp/EventBind.jsx'
import Parent from './components/CallBackProps/Parent.jsx'
import UserGreeting from './components/ConditionalRendering/UserGreeting.jsx'
import ListRendering from './components/ListRendering/ListRendering.jsx'
import InLine from './components/StylingTypes/InLine.jsx'
import CSSModule from './components/StylingTypes/cssModule.jsx'
import Form from './components/ControlledComponent/Form.jsx'
import Memo from './components/ReactMemo/Memo.jsx'
import RefDemo from './components/Refs/RefDemo.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  {/* <App /> */}

  {/* <CounterBtn /> */}
  
  {/* <DestructringPropsandState name="Birat" heroName="Hanuman"></DestructringPropsandState> */}

  {/* <FunctionClick></FunctionClick> */}

  {/* <ClassClick></ClassClick> */}

  {/* <EventBind></EventBind> */}

  {/* <Parent></Parent> */}

  {/* <UserGreeting></UserGreeting> */}

  {/* <ListRendering></ListRendering> */}

  {/* <InLine></InLine> */}

  {/* <CSSModule></CSSModule> */}

  {/* <Form></Form> */}

  {/* <Memo name="Implementation of Memo"></Memo> */}

  <RefDemo></RefDemo>

  </StrictMode>,
)
