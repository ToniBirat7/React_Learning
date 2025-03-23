import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import CounterBtn from './components/CounterClassComp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
      <CounterBtn />
    {/* We are now trying to Increase the value by Clicking the Button using Class Component */}
  </StrictMode>,
)
