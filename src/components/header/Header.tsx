import { NavLink } from 'react-router'
import style from './header.module.css'

export default function Header({ onAddCard, openSettings }) {
  return (
    <div className={style.header}>
      <button onClick={openSettings}>Settings</button>
      <NavLink to='/'>LeitnerApp</NavLink>
      <button onClick={onAddCard}>Add Card</button>
    </div>
  )
}
