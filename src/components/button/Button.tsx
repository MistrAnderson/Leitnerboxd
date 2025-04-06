import style from './button.module.css'

export default function Button({ children, contentType = "main", onClick, className, ...props}) {
  return(
    <button className={`${style.button} ${style[contentType]} ${className}`} onClick={onClick} {...props}>
      {children}
    </button>
  )
}

export function WrongButton({onClick, className, ...props }) {
  return <Button contentType='wrong' onClick={onClick} className={className} {...props} />
}

export function CorrectButton({onClick, className, ...props }) {
  return <Button contentType='correct' onClick={onClick} className={className} {...props} />
}

