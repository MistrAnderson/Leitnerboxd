import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '@/store/hooks.ts'
import { Outlet } from 'react-router'
import Header from '@/components/header/Header.tsx'
import PWABadge from '@/PWABadge.tsx'
import '@/App.css'
import { loadCardsFromIDB, saveCardsToIDB } from './store/cardsData/cardsSlice'
import Modal from './components/modal/Modal'
import CardForm from './components/cardForm/CardForm'
import Settings from './components/settings/Settings'


export default function App() {
  const dispatch = useAppDispatch()
  const state = useAppSelector(state => state)
  const [showAddCard, setShowAddCard] = useState(false)
  const [showSettings, setShowSettings] = useState(false)

  const closeAddCard = () => setShowAddCard(false)
  const openAddCard = () => setShowAddCard(true)

  const closeSettings = () => setShowSettings(false)
  const openSettings = () => setShowSettings(true)

  useEffect(() => {
    dispatch(loadCardsFromIDB())
  
    const handleSave = () => dispatch(saveCardsToIDB())
    window.addEventListener("beforeunload", handleSave)
  
    return () => window.addEventListener("beforeunload", handleSave)
  }, [])
  
  useEffect(() => { dispatch(saveCardsToIDB()) }, [state])

  return (
    <>
      <Header onAddCard={openAddCard} openSettings={openSettings} />

      <Modal show={showAddCard} onClose={closeAddCard}>
        <CardForm onAddCard={closeAddCard}/>
      </Modal>

      <Modal show={showSettings} onClose={closeSettings}>
        <Settings />
      </Modal>

      <Outlet />
      <PWABadge />
    </>
  )
}

