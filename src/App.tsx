import { useState } from 'react'
import PWABadge from './PWABadge.tsx'
import store from './store/store'
import './App.css'

function render() {
  const darkMode = store.getState()
  console.log(darkMode.darkMode)

  const el = document.getElementById('mode')

  el.innerHTML = darkMode.darkMode ? 'dark' : 'light'

}

function App() {
  const [count, setCount] = useState(0)

  store.subscribe(render)

  return (
    <>
      <h1>leitner-app-test</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

        <button onClick={() => store.dispatch({ type: 'darkMode/switch' })}>
          Switch modes
        </button>
        <p>
          Current app state is <span id="mode">light</span> Mode
        </p>
      </div>
      <PWABadge />
    </>
  )
}

export default App
