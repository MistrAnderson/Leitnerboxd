import style from './button.module.css'

interface ButtonProps {
  children: React.ReactNode 
  contentType?: 'main' | 'wrong' | 'correct'
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  className?: string 
  [key: string]: unknown
}

export default function Button({ children, contentType = "main", onClick, className, ...props}: ButtonProps) {
  return(
    <button className={`${style.button} ${style[contentType]} ${className}`} onClick={onClick} {...props}>
      {children}
    </button>
  )
}

interface QuizButtonProps {
  children: React.ReactNode 
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  className?: string 
  [key: string]: unknown
}

export function WrongButton({onClick, className, ...props }: QuizButtonProps) {
  return <Button contentType='wrong' onClick={onClick} className={className} {...props} />
}

export function CorrectButton({onClick, className, ...props }: QuizButtonProps) {
  return <Button contentType='correct' onClick={onClick} className={className} {...props} />
}

