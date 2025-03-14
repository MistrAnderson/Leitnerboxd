import { NavLink } from "react-router";
import { useAppDispatch, useAppSelector } from "../store/hooks";

export function Navbar() {
  const darkMode = useAppSelector(state => state.settings.darkMode)
  const dispatch = useAppDispatch()

  return (
    <nav>
      <NavLink to="/" end>Home</NavLink>
      <NavLink to="/cards">Cards</NavLink>

      <button onClick={() => dispatch({ type: 'settings/switchDarkMode' })}>
        { darkMode ? <span>dark</span> : <span>light</span> }
      </button>
    </nav>
  );
}

