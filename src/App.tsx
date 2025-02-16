import { useState, useEffect } from 'react'
import PWABadge from './PWABadge.tsx'
import store from './store/store'
import './App.css'

function render() {
  const state = store.getState()
  console.log(state.settings)
  // console.log(state.quiz)

  const elDarkMode = document.getElementById('mode')
  const elCards = document.getElementById('cards')

  if (elDarkMode) elDarkMode.innerHTML = state.settings.darkMode ? 'dark' : 'light'
  if (elCards) elCards.innerHTML = state.settings.numberOfCardsPerDay
}

function App() {
  const [count, setCount] = useState(0)

  // subscribe only once
  useEffect(() => {
    const unsubscribe = store.subscribe(render)
    return () => unsubscribe() 
  }, [])

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
          Current app state is <span id="mode">light</span> Mode
        </p>
        <p>
          Current app state is <span id="cards">10</span> Cards
        </p>
      </div>
      <PWABadge />
    </>
  )
}

export default App
