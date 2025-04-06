import style from './modal.module.css'

export default function Modal({ show, onClose, children }) {
  if (!show) return null

  return (
    <div className={style.backdrop} onClick={onClose}>
      <div className={style.modal} onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>)
}
