import { NavLink } from 'react-router'
import style from './header.module.css'

export default function Header({ onAddCard }) {
  return (
    <div className={style.header}>
      <button>Settings</button>
      <NavLink to='/'>LeitnerApp</NavLink>
      <button onClick={onAddCard}>Add Card</button>
    </div>
  )
}
