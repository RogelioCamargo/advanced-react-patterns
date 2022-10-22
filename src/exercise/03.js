// Flexible Compound Components
// http://localhost:3000/isolated/exercise/03.js

import * as React from 'react'
import {Switch} from '../switch'

const ToggleContext = React.createContext()
ToggleContext.displayName = 'ToggleContext'

const useToggle = () => {
  const context = React.useContext(ToggleContext)
  if (!context) throw new Error('useToggle must be used within a <Toggle />')

  return context
}

// 🐨 create your ToggleContext context here
// 📜 https://reactjs.org/docs/context.html#reactcreatecontext

function Toggle({children}) {
  const [on, setOn] = React.useState(false)
  const toggle = () => setOn(!on)

  return (
    <ToggleContext.Provider value={[on, toggle]}>
      {children}
    </ToggleContext.Provider>
  )
}

function ToggleOn({children}) {
  const [on] = useToggle()

  return on ? children : null
}

function ToggleOff({children}) {
  const [on] = useToggle()

  return on ? null : children
}

function ToggleButton({...props}) {
  const [on, toggle] = useToggle()

  return <Switch on={on} onClick={toggle} {...props} />
}

function App() {
  return <ToggleButton />
}

export default App

/*
eslint
  no-unused-vars: "off",
*/
