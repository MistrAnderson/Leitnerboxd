import { useEffect } from "react";
import { NavLink } from "react-router";
import { store } from '../store/store'

function render() {
  const state = store.getState()

  const elDarkMode = document.getElementById('mode')

  if (elDarkMode) elDarkMode.innerHTML = state.settings.darkMode ? 'dark' : 'light'
}

export function Navbar() {
  useEffect(() => {
    render() // set value on startup
    const unsubscribe = store.subscribe(render)
    return () => unsubscribe() 
  }, [])

  return (
    <nav>
      <NavLink to="/" end>Home</NavLink>
      <NavLink to="/test" end>Test</NavLink>
      <NavLink to="/concerts">Concerts</NavLink>
      <NavLink to="/cards">Cards</NavLink>

      <button id="mode" onClick={() => store.dispatch({ type: 'settings/switchDarkMode' })}>
        light
      </button>
    </nav>
  );
}

