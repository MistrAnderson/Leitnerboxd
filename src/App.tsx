import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '@/store/hooks.ts'
import { Outlet } from 'react-router'
import Header from '@/components/header/Header.tsx'
import PWABadge from '@/PWABadge.tsx'
import '@/App.css'
import { loadCardsFromIDB, saveCardsToIDB } from './store/cardsData/cardsSlice'
import Modal from './components/modal/Modal'
import CardForm from './components/cardForm/CardForm'


export default function App() {
  const dispatch = useAppDispatch()
  const state = useAppSelector(state => state)
  const [showModal, setShowModal] = useState(false)

  const closeModal = () => setShowModal(false)
  const openModal = () => setShowModal(true)


  useEffect(() => {
    dispatch(loadCardsFromIDB())
  
    const handleSave = () => dispatch(saveCardsToIDB())
    window.addEventListener("beforeunload", handleSave)
  
    return () => window.addEventListener("beforeunload", handleSave)
  }, [])
  
  useEffect(() => { dispatch(saveCardsToIDB()) }, [state])

  return (
    <>
      <Header onAddCard={openModal} />

      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <CardForm onAddCard={closeModal}/>
      </Modal>

      <Outlet />
      <PWABadge />
    </>
  )
}

