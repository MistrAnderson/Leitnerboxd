import style from './header.module.css'

export default function Header() {
  return (
    <div className={style.header}>
      <button>Settings</button>
      <button>LeitnerApp</button>
      <button>Add Card</button>
    </div>
  )
}
