import { NavLink } from "react-router";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { loadCardsFromIDB, saveCardsToIDB } from "@/store/cardsData/cardsSlice";
import { switchDarkMode } from "@/store/settings/settingsSlice";

export function Navbar() {
  const darkMode = useAppSelector(state => state.settings.darkMode)
  const dispatch = useAppDispatch()

  return (
    <nav>
      <NavLink to="/" end>Home</NavLink>
      <NavLink to="/cards">Cards</NavLink>
      <NavLink to="/quiz">Quiz</NavLink>

      <button onClick={() => dispatch(switchDarkMode())}>
        { darkMode ? <span>dark</span> : <span>light</span> }
      </button>

      <button onClick={() => dispatch(saveCardsToIDB())}>
        Save state
      </button>

      <button onClick={() => dispatch(loadCardsFromIDB())}>
        Load state
      </button>
    </nav>
  );
}

