import { useState } from 'react'
import { useSelector } from 'react-redux'
import PWABadge from './PWABadge.tsx'
import store from './store/store'
import './App.css'


function App() {
  const [count, setCount] = useState(0)
  const state = store.getState()
  const darkMode = useSelector(state => state.settings.darkMode)
  
  return (
    <>
      <h1>leitner-app-test</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

        <button onClick={() => store.dispatch({ type: 'settings/setCardPerDay', payload: 5 })}>
          set card number to 5
        </button>

        <button onClick={() => store.dispatch({ type: 'settings/setCardPerDay', payload: 10 })}>
          set card number to 10
        </button>

        <button onClick={() => store.dispatch({ type: 'settings/switchDarkMode' })}>
          Switch modes
        </button>
        <p>
          Current app state is { darkMode ? <span>dark</span> : <span>light</span> } Mode
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
