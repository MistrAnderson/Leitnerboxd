import style from './modal.module.css'

interface ModalProps {
  show: boolean
  onClose: (event: React.MouseEvent<HTMLDivElement>) => void
  children: React.ReactNode
}

export default function Modal({ show, onClose, children }: ModalProps) {
  if (!show) return null

  return (
    <div className={style.backdrop} onClick={onClose}>
      <div className={style.modal} onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>)
}
