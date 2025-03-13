import { useState } from 'react'
import { useDispatch } from 'react-redux'
// import { useDispatch, useSelector } from 'react-redux'
import PWABadge from './PWABadge.tsx'
import './App.css'


function App() {
  const [count, setCount] = useState(0)
  // const darkMode = useSelector(state => state.settings.darkMode)
  const dispatch = useDispatch()
  
  return (
    <>
      <h1>leitner-app-test</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

        <button onClick={() => dispatch({ type: 'settings/setCardPerDay', payload: 5 })}>
          set card number to 5
        </button>

        <button onClick={() => dispatch({ type: 'settings/setCardPerDay', payload: 10 })}>
          set card number to 10
        </button>

        <button onClick={() => dispatch({ type: 'settings/switchDarkMode' })}>
          Switch modes
        </button>
        <p>
        {/* Current app state is { darkMode ? <span>dark</span> : <span>light</span> } Mode */}
        </p>
        <p>
          Current app state is TODO SHOW CARDS Cards
        </p>
      </div>
      <PWABadge />
    </>
  )
}

export default App
