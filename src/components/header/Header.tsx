import { NavLink } from 'react-router'
import style from './header.module.css'

interface HeaderProps {
  onAddCard: (event: React.MouseEvent<HTMLButtonElement>) => void
  openSettings: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export default function Header({ onAddCard, openSettings }: HeaderProps) {
  return (
    <div className={style.header}>
      <button onClick={openSettings}>Settings</button>
      <NavLink to='/'>LeitnerApp</NavLink>
      <button onClick={onAddCard}>Add Card</button>
    </div>
  )
}
