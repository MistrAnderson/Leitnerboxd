import style from './button.module.css'

export default function Button({ children, type = "main", onClick, className, ...props}) {
  return(
    <button className={`${style.button} ${style[type]} ${className}`} onClick={onClick} {...props}>
      {children}
    </button>
  )
}

export function WrongButton({onClick, className, ...props }) {
  return <Button type='wrong' onClick={onClick} className={className} {...props} />
}

export function CorrectButton({onClick, className, ...props }) {
  return <Button type='correct' onClick={onClick} className={className} {...props} />
}

