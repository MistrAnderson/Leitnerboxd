import style from './button.module.css'

export default function Button({ children, type = "main", onClick, ...props}) {
  return(
    <button className={`${style.button} ${style[type]}`} onClick={onClick} {...props}>
      {children}
    </button>
  )
}

export function WrongButton({onClick, ...props }) {
  return <Button type='wrong' onClick={onClick} {...props} />
}

export function CorrectButton({onClick, ...props }) {
  return <Button type='correct' onClick={onClick} {...props} />
}

